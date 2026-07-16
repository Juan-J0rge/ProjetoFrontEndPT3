import { styled } from 'styled-components'

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
`

export const StyledModal = styled.div`
  position: relative;

  width: 100%;
  max-width: 1024px;
  height: 344px;

  display: flex;
  flex-direction: row;
  gap: 24px;

  padding: 32px;
  background-color: #e66767;
`

export const StyledClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background: none;
  border: none;
  cursor: pointer;

  color: #ffffff;
  font-size: 16px;
  line-height: 1;
`

export const StyledImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
  transform: rotate(0deg);
  opacity: 1;
`

export const StyledContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  h3 {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
  }

  p {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0;
  }

  span {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0;
  }
`

export const StyledAddButton = styled.button`
  align-self: flex-start;

  padding: 4px 8px;
  background-color: #ffebd9;
  border: none;
  cursor: pointer;

  color: #e66767;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
`
