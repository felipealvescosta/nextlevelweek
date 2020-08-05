import React from 'react';

import './styles.css';
import whatsIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <div>
        <img src="https://avatars2.githubusercontent.com/u/5261686?s=460&u=45df0ddff43157747ec71945a890eba7b63daa2d&v=4" alt="Felipe Alves"/>
        <strong>Felipe Alves</strong>
        <span>Programação</span>
        <p>
          Olá! 
          <br/>
          Sou Felipe Alves professor e desenvolvedor!
      </p>
      </div>
    </header>
    <footer>
        <p>Valor/Hora: 
        <strong>R$ 200,00</strong>
        </p>
       
        <button>
          <img src={whatsIcon} alt="Contato"/>
          Entre em contato
        </button>
      </footer>
  </article>
  );
}

export default TeacherItem;