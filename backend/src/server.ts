import express from 'express'

const app = express()

app.get('/users', ()=> {
  console.log('acessou')
});

app.listen(3333)