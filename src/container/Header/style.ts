import { styled } from 'styled-components'
import fundo from '../../assets/images/fundo.png'

const StyledHeader = styled.header`
  height: 384px;
  padding-top: 64px;
  padding-bottom: 40px;

  background-image: url(${fundo});
  background-repeat: repeat;
  background-size: auto;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    width: 540px;
    font-size: 36px;
    line-height: 42.19px;
    font-weight: 900;
    text-align: center;
  }
`

export default StyledHeader
