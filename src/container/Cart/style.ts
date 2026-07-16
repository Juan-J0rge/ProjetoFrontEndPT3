import { styled } from 'styled-components'

export const StyledOverlay = styled.div<{ $aberto: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 200;

  background-color: rgba(0, 0, 0, 0.7);

  opacity: ${(props) => (props.$aberto ? 1 : 0)};
  pointer-events: ${(props) => (props.$aberto ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out;
`

export const StyledCart = styled.aside<{ $aberto: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 201;

  width: 360px;
  max-width: 100%;

  background-color: #e66767;
  padding: 32px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  transform: translateX(${(props) => (props.$aberto ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
`

export const StyledClose = styled.button`
  align-self: flex-end;
  margin-right: 8px;

  background: none;
  border: none;
  cursor: pointer;

  color: #ffebd9;
  font-size: 16px;
`

export const StyledEmpty = styled.p`
  margin-top: 32px;

  color: #ffebd9;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`

export const StyledUl = styled.ul`
  width: 100%;
  margin-top: 16px;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const StyledCartItem = styled.li`
  position: relative;

  width: 344px;
  min-height: 100px;
  max-width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 8px;
  background-color: #ffebd9;

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    flex-shrink: 0;
  }

  div {
    flex: 1;

    h4 {
      color: #e66767;
      font-family: 'Roboto', sans-serif;
      font-weight: 900;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: left;
    }

    span {
      display: block;
      margin-top: 4px;

      color: #e66767;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0;
      text-align: left;
    }
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;

    width: 16px;
    height: 16px;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;
    cursor: pointer;
    color: #e66767;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`

export const StyledTotal = styled.div`
  width: 344px;
  max-width: 100%;
  margin: 16px 0 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0;

  span {
    color: #ffebd9;
  }
`

export const StyledCheckoutButton = styled.button`
  width: 344px;
  height: 24px;
  max-width: 100%;

  background-color: #ffebd9;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #e66767;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
`
