import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  padding: 24px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Nav = styled.nav`
  flex: 1;

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
  }
`

export const Logo = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    display: block;
  }
`

export const CarrinhoBotao = styled.button`
  flex: 1;
  background: transparent;
  border: none;
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 14px;
  text-align: right;
  cursor: pointer;
`
