import { Prato } from '../../models/Prato'
import { useAppDispatch } from '../../store/hooks'
import { adicionar } from '../../store/cartSlice'
import {
  Overlay,
  ModalContainer,
  Fechar,
  Conteudo,
  Imagem,
  Texto,
  Titulo,
  Descricao,
  Porcao,
  Comprar
} from './styles'

type Props = {
  prato: Prato
  aoFechar: () => void
}

const formatarPreco = (preco: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)

const ModalPrato = ({ prato, aoFechar }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <Overlay>
      <ModalContainer>
        <Fechar onClick={aoFechar} title="Fechar" aria-label="Fechar">
          X
        </Fechar>
        <Conteudo>
          <Imagem style={{ backgroundImage: `url(${prato.foto})` }} />
          <Texto>
            <Titulo>{prato.nome}</Titulo>
            <Descricao>{prato.descricao}</Descricao>
            <Porcao>{prato.porcao}</Porcao>
            <Comprar
              onClick={() => {
                dispatch(adicionar(prato))
                aoFechar()
              }}
            >
              Adicionar ao carrinho - {formatarPreco(prato.preco)}
            </Comprar>
          </Texto>
        </Conteudo>
      </ModalContainer>
    </Overlay>
  )
}

export default ModalPrato
