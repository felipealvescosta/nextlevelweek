import React from 'react';
import  './styles.css';

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import TeacherItem from '../../components/TeacherItem'
function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os professores disponíveis!">
        <form id="search-teachers">
          <Input name="subject"label="Matéria"/>
          <Input name="week_day"label="Dia da Semana"/>
          <Input name="time"label="Hora"/>
        </form> 
      </PageHeader>

      <main>
        <TeacherItem/>
      </main>
    </div>
  );
}

export default TeacherList;