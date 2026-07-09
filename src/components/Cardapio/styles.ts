import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink, ButtonContainer } from '../Button/styles'

export const Container = styled.section`
  padding: 40px 0 64px;
  background-color: ${cores.creme};
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid rgba(230, 103, 103, 0.25);
  display: flex;
  flex-direction: column;
  padding: 0 0 16px;

  ${ButtonLink}, ${ButtonContainer} {
    margin: 8px 16px 0;
    align-self: flex-start;
  }
`

export const Capa = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${cores.creme};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 16px;
  padding: 0 16px;
`

export const Descricao = styled.p`
  color: ${cores.rosa};
  font-size: 13px;
  line-height: 20px;
  padding: 12px 16px 0;
`
