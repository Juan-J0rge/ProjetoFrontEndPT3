import { styled } from 'styled-components'

const StyledMenuItem = styled.div`
  width: 320px;
  min-height: 340px;
  padding: 8px;
  background-color: #e66767;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 168px;
    object-fit: cover;
  }

  h3,
  p {
    color: #ffebd9;
    margin: 8px 0;
  }

  h3 {
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    flex-grow: 1;

    /* trunca a descrição em 4 linhas para não vazar do card */
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  button {
    margin-top: auto;
  }
`

export default StyledMenuItem
