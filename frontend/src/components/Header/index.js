import React, { useEffect, useState} from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header({ notification }) {

  const [ lateCount, setLateCount ] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify();
  }, []);

  async function logout() {
    localStorage.removeItem('@todo/macaddress');

    window.location.reload();
  }

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">
          <a href="/">INÍCIO</a>
        </Link>
        <span className="dividir" />
        <Link to="/task">
          <a href="/">NOVA TAREFA</a>
        </Link>
        <span className="dividir" />
        {
        !isConnected
        ? <Link to="/qrcode">
            <a href="/">SINCRONIZAR CELULAR</a>
          </Link>
        : <button
            type="button"
            className="button-sair"
            onClick={ logout }
          >
            SAIR
          </button>
        }
        { lateCount && 
          <>
            <span className="dividir" />
            <button
              type="button"
              onClick={notification}
              id="notification"
            >
              <img src={bell} alt="Notificação" />
              <span>{ lateCount }</span>
            </button>
          </> }
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
