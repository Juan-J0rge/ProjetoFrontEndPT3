import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 200;
  display: flex;
  justify-content: flex-end;
`

export const CarrinhoContainer = styled.aside`
  width: 100%;
  max-width: 380px;
  height: 100%;
  background-color: ${cores.rosa};
  padding: 24px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const Lista = styled.ul`
  flex: 1;

  p {
    color: ${cores.rosa};
    text-align: center;
    margin-top: 40px;
    font-size: 14px;
  }
`

export const Item = styled.li`
  background-color: ${cores.creme};

  padding: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`

export const ItemImagem = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 4px;
  flex-shrink: 0;
  background-color: ${cores.creme};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ItemInfo = styled.div`
  flex: 1;
`

export const ItemTitulo = styled.p`
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 13px;
  margin-bottom: 4px;
`

export const ItemPreco = styled.p`
  color: ${cores.rosa};
  font-size: 13px;
`

export const Remover = styled.button`
  background: transparent;
  border: none;
  color: ${cores.rosa};
  font-size: 16px;
  cursor: pointer;
  flex-shrink: 0;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.branca};
  font-weight: bold;
  font-size: 14px;
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 8px;
`

export const Continuar = styled.button`
  background-color: ${cores.creme};
  color: ${cores.rosa};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`
