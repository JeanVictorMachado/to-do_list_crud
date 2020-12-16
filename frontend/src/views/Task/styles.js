import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
` 

export const TypeIcons = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .inative {
    opacity: 0.5;
  }

  button {
    border: none;
    background: none;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 25px;
    box-shadow: 0 0 1px black;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`

export const Input = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;

  span {
    color: #707070;
    margin-bottom: 5px;
  }

  input {
    font-size: 16px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #EE6B26;
  }

  img {
    width: 20px;
    position: relative;
    left: 89%;
    bottom: 35px;
  }
`

export const TextArea = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;

  span {
    color: #707070;
    margin-bottom: 5px;
  }

  textarea {
    font-size: 16px;
    padding: 10px;
    border: none;
    border: 1px solid #EE6B26;
    border-radius: 10px;
  }
`

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    color: #EE6B26;
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
  }

  button {
    font-weight: bold;
    color: #20295F;
    border: none;
    background: none;
    font-size: 18px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Save = styled.div`
  width: 100%;

  button {
    width: 100%;
    background: #EE6B26;
    border: none;
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 1px 4px black;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  } 
`
