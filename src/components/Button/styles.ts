import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

const buttonBase = `
  border: none;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
`

export const ButtonContainer = styled.button`
  ${buttonBase}
  background-color: ${cores.rosa};
`

export const ButtonLink = styled(Link)`
  ${buttonBase}
  background-color: ${cores.rosa};
`
