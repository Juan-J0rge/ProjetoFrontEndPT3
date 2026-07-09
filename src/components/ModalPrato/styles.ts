import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  overflow-y: auto;
`

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  max-height: 90vh;
  overflow-y: auto;
  background-color: ${cores.rosa};
  border-radius: 4px;
  padding: 32px;
  position: relative;
`

export const Fechar = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: ${cores.branca};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  line-height: 1;
`

export const Conteudo = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
`

export const Imagem = styled.div`
  width: 240px;
  height: 200px;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.2);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`

export const Texto = styled.div`
  flex: 1;
`

export const Titulo = styled.h2`
  color: ${cores.branca};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Descricao = styled.p`
  color: ${cores.branca};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Porcao = styled.p`
  color: ${cores.branca};
  font-size: 13px;
  margin-bottom: 24px;
`

export const Comprar = styled.button`
  background-color: ${cores.creme};
  color: ${cores.rosa};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`
