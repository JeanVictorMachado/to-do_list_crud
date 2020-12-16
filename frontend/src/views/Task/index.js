import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';
import { format } from 'date-fns';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

// import iconCalendar from '../../assets/calendar.png';
// import iconClock from '../../assets/clock.png';

function Task({ match }) {
  const [ redirect, setRedirect ] = useState(false);
  const [ type, setType ] = useState();
  // const [ id, setId ] = useState();
  const [ done, setDone ] = useState(false);
  const [ title, setTitle ] = useState();
  const [ description, setDescription ] = useState();
  const [ date, setDate ] = useState();
  const [ hour, setHour ] = useState();
  const [ macaddress ] = useState('11:11:11:11:11:11');

  async function loadTasksDetails() {
    await api.get(`/task/${match.params.id}`)
      .then(response => {
        setType(response.data.type)
        setDone(response.data.done)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDate(format(new Date(response.data.when), 'yyyy-MM-dd' ))
        setHour(format(new Date(response.data.when), 'HH:mm' ))
      })
  }

  async function save() {
    if (!title)
      return alert("Você precisa informar o título da terefa")
    else if (!description)
      return alert("Você precisa informar a descrição da terefa")
    else if(!type)
      return alert("Você precisa informar o tipo da terefa")
    else if (!date)
      return alert("Você precisa informar a data da terefa")
    else if(!hour)
      return alert("Você precisa informar a hora da terefa")

    if (match.params.id) {
      await api.put(`/task/${match.params.id}`, {
        macaddress,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      })
      .then( () => setRedirect(true) )
    }
    else {
      await api.post('/task', {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      })
      .then( () => setRedirect(true) )
      .catch( response => {
        alert(response.data.error)
      })
    }
  }

  async function remove() {
    const res = window.confirm('Deseja realmente remover a tarefa?')

    if (res === true) {
      await api.delete(`/task/${match.params.id}`)
        .then( () => setRedirect(true) )
    }
  }

  useEffect(() => {
    if (!isConnected) 
      setRedirect(true);

    loadTasksDetails();
  }, []);

  return (
    <S.Container>
      { redirect && <Redirect to="/" /> }
      <Header/>
      <S.Form>
        <S.TypeIcons>
          { TypeIcons.map((icon, index) => (
            index > 0 &&
            <button
              key={ index }
              type="button"
              onClick={() => setType(index)}>
                <img 
                  src={icon} 
                  alt="Tipo da tarefa"
                  className={ type && type !== index && 'inative' }
                />
            </button>
          )) }
        </S.TypeIcons>
        <S.Input>
          <span>Título</span>
          <input 
            type="text"
            value={ title }
            placeholder="Título da terefa..."
            onChange={ ({ target }) => setTitle(target.value) }
          />
        </S.Input>
        <S.TextArea>
          <span>Descrição</span>
          <textarea 
            rows={5}
            value={ description }
            placeholder="Detalhes da terefa..."
            onChange={ ({ target }) => setDescription(target.value) }
          />
        </S.TextArea>
        <S.Input>
          <span>Data</span>
          <input 
            type="date"
            value={ date }
            placeholder="Título da terefa..."
            onChange={ ({ target }) => setDate(target.value) }
          />
          {/* <img
            src={iconCalendar}
            alt="Calendário"
          /> */}
        </S.Input>
        <S.Input>
          <span>Hora</span>
          <input 
            type="time"
            value={ hour }
            placeholder="Título da terefa..."
            onChange={ ({ target }) => setHour(target.value) }
          />
          {/* <img
            src={iconClock}
            alt="Relógio"
          /> */}
        </S.Input>
        <S.Options>
          {console.log(done)}
          <div>
            <label htmlFor="checkbox">
              <input 
                id="checkbox"
                type="checkbox"
                checked={ done }
                onChange={ () => setDone(!done) }
              />
              CONCLUÍDO
            </label>
          </div>
          { match.params.id && 
            <button 
              type="button"
              onClick={ remove } 
            >
              EXCLUIR
            </button> }
        </S.Options>
        <S.Save>
          <button 
            type="button"
            onClick={ save }
          >
            Salvar
          </button>
        </S.Save>
      </S.Form>
      <Footer />
    </S.Container>
  );
}

export default Task;