import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  creme: '#FFEBD9',
  branca: '#FFFFFF',
  preta: '#111',
  cinzaClaro: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.creme};
    color: ${cores.rosa};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
