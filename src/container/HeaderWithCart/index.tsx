import StyledHeaderWithCart from './style'
import efoodLogo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { abrirCarrinho } from '../../store/cartSlice'

const HeaderWithCart = () => {
  const dispatch = useAppDispatch()
  const quantidade = useAppSelector((state) => state.cart.itens.length)

  return (
    <StyledHeaderWithCart>
      <div className="container">
        <span>Restaurantes</span>
        <Link to={'/'}>
          <img src={efoodLogo} alt="Logo do efood" />
        </Link>
        <button onClick={() => dispatch(abrirCarrinho())}>
          {quantidade} produto{quantidade === 1 ? '' : 's'} no carrinho
        </button>
      </div>
    </StyledHeaderWithCart>
  )
}

export default HeaderWithCart
