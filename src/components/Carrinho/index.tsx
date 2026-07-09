import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { remover, fecharCarrinho } from '../../store/cartSlice'

import {
  Overlay,
  CarrinhoContainer,
  Lista,
  Item,
  ItemImagem,
  ItemInfo,
  ItemTitulo,
  ItemPreco,
  Remover,
  Total,
  Continuar
} from './styles'

const formatarPreco = (preco: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)

const Carrinho = () => {
  const dispatch = useAppDispatch()
  const { itens, aberto } = useAppSelector((state) => state.cart)

  if (!aberto) {
    return null
  }

  const valorTotal = itens.reduce((total, item) => total + item.preco, 0)

  return (
    <Overlay onClick={() => dispatch(fecharCarrinho())}>
      <CarrinhoContainer onClick={(evento) => evento.stopPropagation()}>
        <Lista>
          {itens.length === 0 && <p>O carrinho está vazio</p>}
          {itens.map((item, indice) => (
            <Item key={`${item.id}-${indice}`}>
              <ItemImagem style={{ backgroundImage: `url(${item.foto})` }} />
              <ItemInfo>
                <ItemTitulo>{item.nome}</ItemTitulo>
                <ItemPreco>{formatarPreco(item.preco)}</ItemPreco>
              </ItemInfo>
              <Remover
                onClick={() => dispatch(remover(indice))}
                title="Remover item"
                aria-label="Remover item"
              >
                🗑
              </Remover>
            </Item>
          ))}
        </Lista>

        {itens.length > 0 && (
          <>
            <Total>
              <span>Valor total</span>
              <span>{formatarPreco(valorTotal)}</span>
            </Total>
            <Continuar>Continuar com a entrega</Continuar>
          </>
        )}
      </CarrinhoContainer>
    </Overlay>
  )
}

export default Carrinho
