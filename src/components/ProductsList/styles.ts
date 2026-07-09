import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 40px 0 64px;
  background-color: ${cores.creme};

  h2 {
    color: ${cores.rosa};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 24px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`
