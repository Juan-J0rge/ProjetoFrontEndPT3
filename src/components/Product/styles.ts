import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid rgba(230, 103, 103, 0.25);
  display: flex;
  flex-direction: column;
  padding: 0 0 16px;

  ${ButtonLink} {
    margin: 0 16px;
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
  position: relative;
  margin-bottom: 16px;
`

export const Tags = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 8px;

  ${TagContainer} {
    white-space: nowrap;
  }
`

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

export const Titulo = styled.h3`
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 16px;
`

export const Avaliacao = styled.span`
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;

  span {
    color: #ffc107;
  }
`

export const Descricao = styled.p`
  color: ${cores.rosa};
  font-size: 13px;
  line-height: 20px;
  padding: 12px 16px 16px;
`
