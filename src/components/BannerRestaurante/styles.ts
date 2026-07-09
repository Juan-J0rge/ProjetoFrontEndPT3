import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: flex-end;

  .container {
    padding-bottom: 24px;
  }
`

export const Tipo = styled.span`
  display: block;
  color: ${cores.branca};
  opacity: 0.85;
  font-size: 13px;
  margin-bottom: 8px;
`

export const Titulo = styled.h1`
  color: ${cores.branca};
  font-size: 24px;
  font-weight: bold;
`
