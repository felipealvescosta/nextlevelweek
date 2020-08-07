import React from 'react';
import  './styles.css';
import PageHeader from '../../components/PageHeader'

function TeacherForm() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Incrível que você quer dar aulas!"
        description="Faca sua inscrição"
      />
    </div>
    <main>
      <fieldset>
        <legend>Seus dados</legend>

        <div className="input-block">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name"/>
        </div>

        <div className="input-block">
            <label htmlFor="avatar">Nome Completo</label>
            <input type="text" id="avatar"/>
        </div>

        <div className="input-block">
            <label htmlFor="whatsapp">WhatsApp</label>
            <input type="text" id="whatsapp"/>
        </div>
      </fieldset>
    </main>
  );
}

export default TeacherForm;