import {
  StyledOverlay,
  StyledCart,
  StyledClose,
  StyledEmpty,
  StyledUl,
  StyledCartItem,
  StyledTotal,
  StyledCheckoutButton
} from './style'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fecharCarrinho, removerDoCarrinho } from '../../store/cartSlice'
import IconeLixeira from '../../components/IconeLixeira'

const formatarPreco = (valor: number) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

const Cart = () => {
  const dispatch = useAppDispatch()
  const { itens, estaAberto } = useAppSelector((state) => state.cart)

  const valorTotal = itens.reduce((total, item) => total + item.preco, 0)

  return (
    <>
      <StyledOverlay
        $aberto={estaAberto}
        onClick={() => dispatch(fecharCarrinho())}
      />
      <StyledCart $aberto={estaAberto}>
        <StyledClose onClick={() => dispatch(fecharCarrinho())}>X</StyledClose>

        {itens.length === 0 ? (
          <StyledEmpty>O carrinho está vazio</StyledEmpty>
        ) : (
          <StyledUl>
            {itens.map((item) => (
              <StyledCartItem key={item.cartId}>
                <img src={item.imagem} alt={item.nome} />
                <div>
                  <h4>{item.nome}</h4>
                  <span>{formatarPreco(item.preco)}</span>
                </div>
                <button
                  onClick={() => dispatch(removerDoCarrinho(item.cartId))}
                  aria-label={`Remover ${item.nome} do carrinho`}
                >
                  <IconeLixeira />
                </button>
              </StyledCartItem>
            ))}
          </StyledUl>
        )}

        {itens.length > 0 && (
          <>
            <StyledTotal>
              <span>Valor total</span>
              <span>{formatarPreco(valorTotal)}</span>
            </StyledTotal>
            <StyledCheckoutButton>Continuar com a entrega</StyledCheckoutButton>
          </>
        )}
      </StyledCart>
    </>
  )
}

export default Cart
