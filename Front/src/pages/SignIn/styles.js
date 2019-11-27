import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  height: 100%;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Menu = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
  background: #fff;
  border-radius: 4px;

  img {
    margin-top: 50px;
    height: 190px;
    width: 190px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 70px;
    margin-top: 0;

    strong {
      text-align: left;
      font-size: 14px;
      margin-bottom: 5px;
    }

    input {
      display: block;
      border-top: 5px;
      border: 1px solid #ced4da;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: #ced4da;
      }
    }

    span {
      color: #ee4d64;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #222239;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#222239')};
      }
    }
  }
`
