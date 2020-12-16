import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #20295F;
  border-bottom: 5px solid #EE6B26;

  display: flex;

`
export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  padding-left: 10px;
  
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 40px;
  }
`
export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .button-sair {
    font-size: 16px;
    color: #FFF;
    font-weight: bold;

    &:hover{
      color: #EE6B26;
    }
  }

  a {
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    margin: 0 10px;
    background: none;
    border: none;

    &:hover{
      color: #EE6B26;
    }
  }

  button {
      background: none;
      border: none;
      cursor: pointer;
    }

  #notification {
    img {
      width: 25px;
      height: 30px;
    }

    span {
      background: #FFF;
      color: #EE6B26;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  .dividir::after {
    content: "|";
    margin: 0 10px;
    color: #FFF;
  }
`