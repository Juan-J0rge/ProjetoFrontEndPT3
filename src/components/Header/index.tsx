import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { alternarCarrinho } from '../../store/cartSlice'

import { HeaderBar, Nav, Logo, CarrinhoBotao } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  const dispatch = useAppDispatch()
  const itens = useAppSelector((state) => state.cart.itens)

  return (
    <HeaderBar>
      <div className="container">
        <Nav>
          <Link to="/">Restaurantes</Link>
        </Nav>
        <Logo to="/">
          <img src={logo} alt="efood" />
        </Logo>
        <CarrinhoBotao
          onClick={() => dispatch(alternarCarrinho())}
          title="Ver carrinho"
        >
          {itens.length} produto(s) no carrinho
        </CarrinhoBotao>
      </div>
    </HeaderBar>
  )
}

export default Header
