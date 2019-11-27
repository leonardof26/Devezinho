import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  justify-content: center;
  padding: 0 10px;
  img {
    height: 100px;
    width: 100px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
`

export const StudentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #f1f1f1;
    border-radius: 4px;
    padding: 20px;
    border-radius: 4px;

    img {
      align-self: center;
      max-width: 250px;
      border-radius: 125px;
    }

    strong:first-of-type {
      margin-top: 5px;
      text-align: center;
      margin-bottom: 20px;
    }

    div {
      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
        margin-right: 10px;
      }

      > span {
        font-size: 14px;
        margin: 5px 0 20px;
      }
    }
  }
`
