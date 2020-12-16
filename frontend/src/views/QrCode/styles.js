import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QrCodeArea = styled.div`
  width: 100%;
  margin-top: 10px;

  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #EE6B26;
    text-align: center;
  }

  p {
    color: #20295F;
    font-weight: bold;
    text-align: center;
  }
`

export const ValidationCode = styled.div`
  margin: 10px;
  margin-top: 25px;

  display: flex;
  flex-direction: column;

  span {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
  }

  input {
    margin-top: 5px;
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
  }

  button {
    font-weight: bold;
    background: #EE6B26;
    color: #FFF;
    font-size: 18px;
    padding: 12px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 70px;
    box-shadow: 0 1px 4px black;

    &:hover {
      background: #20295F;
    }
  }
`
