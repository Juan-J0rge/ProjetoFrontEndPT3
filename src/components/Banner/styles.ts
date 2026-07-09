import styled from 'styled-components'
import { cores } from '../../styles'
import heroBg from '../../assets/images/hero-bg.png'

export const Container = styled.div`
  width: 100%;
  padding: 40px 0 64px;
  background-image: url(${heroBg});
  background-repeat: repeat;
  background-size: auto;

  .container {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`

export const Titulo = styled.h1`
  color: ${cores.rosa};
  font-size: 28px;
  font-weight: bold;
  max-width: 520px;
  line-height: 1.4;
`
