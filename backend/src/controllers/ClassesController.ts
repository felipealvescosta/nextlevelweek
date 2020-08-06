import {Request, Response} from 'express'
import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'


interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}


export default class ClassesController {

  async index(request: Request, response: Response){
     const filters = request.query

     const week_day = filters.week_day as string
     const subject = filters.subject as string
     const time = filters.time as string

     if(!filters.week_day || !filters.subject || !filters.time){
       return response.status(400).json({
         error: 'É preiso informar os dados'
       })
     }

     const timeInMinutes = convertHourToMinutes(time as string)

     const classes = await db('classes')
      .whereExists(function (){
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
      })
      .where('classes.subject', '=',  subject)
      .join('users','classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])

     return response.status(200).json(classes)
  }

  async create(request: Request, response: Response) {
    const {
      name, 
      avatar, 
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body;

    const insertUserId = await db('users').insert({
      name, 
      avatar, 
      whatsapp,
      bio,
    })

  const user_id = insertUserId[0]
 
  
  const classesInsertId = await db('classes').insert({
    subject,
    cost,
    user_id
  })

  const class_id = classesInsertId[0]
  console.log(class_id)
  
  const classSchedule = schedule.map( (scheduleItem: ScheduleItem )=>{
    console.log(scheduleItem)
    return {
      class_id,
      week_day: scheduleItem.week_day,
      from: convertHourToMinutes(scheduleItem.from),
      to: convertHourToMinutes(scheduleItem.to),
    }
  })
  
  await db('class_schedule').insert(classSchedule)

  return response.send()
}
}