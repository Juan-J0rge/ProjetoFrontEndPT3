import styled from 'styled-components'
import { cores } from '../../styles'
import heroBg from '../../assets/images/hero-bg.png'

export const Container = styled.footer`
  background-color: ${cores.creme};
  background-image: url(${heroBg});
  background-repeat: repeat;
  padding: 48px 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Logo = styled.img`
  display: block;
  height: 32px;
  margin: 0 auto 60px;
`

export const RedesSociais = styled.img`
  display: block;
  margin-top: 24px;
`

export const Texto = styled.p`
  color: ${cores.rosa};
  font-size: 11px;
  max-width: 480px;
  margin-top: 40px;
  line-height: 18px;
`
