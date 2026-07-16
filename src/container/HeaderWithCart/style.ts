import { styled } from 'styled-components'
import fundo from '../../assets/images/fundo.png'

const StyledHeaderWithCart = styled.header`
  height: 186px;
  background-image: url(${fundo});
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  padding-top: 64px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 900;
      font-size: 18px;
      line-height: 21.09px;
      text-align: center;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      font-family: inherit;
      font-weight: 900;
      font-size: 18px;
      line-height: 21.09px;
      text-align: center;
    }
  }
`
export default StyledHeaderWithCart
