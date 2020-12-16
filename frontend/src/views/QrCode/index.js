import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import * as S from './styles';
import Qr from 'qrcode.react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {

  const [ mac, setMac ] = useState();
  const [ redirect, setRedirect ] = useState(false);

  async function saveMac() {
    await localStorage.setItem('@todo/macaddress', mac);

    setRedirect(true);

    window.location.reload();
  }

  return (
    <div>
      <S.Container>
        { redirect && <Redirect to="/" />}
        <Header/>
        <S.Content>
          <h1>CAPTURE O QRCODE PELO APP</h1>
          <p>suas atividades serão sincronizadas com a do seu celular.</p>
          <S.QrCodeArea>
            <Qr value='getmacaddress' size={350}/>
          </S.QrCodeArea>
          <S.ValidationCode>
            <span>Ditite os números que apareceram no seu celular</span>
            <input
              type="text"
              value={ mac }
              onChange={ ({ target }) => setMac(target.value) }  
            />
            <button
              type="button"
              onClick={ saveMac }
            >
              SINCRONIZAR
            </button>
          </S.ValidationCode>
        </S.Content>
        <Footer/>
      </S.Container>
    </div>
  )
}

export default QrCode;
