import {
  StyledOverlay,
  StyledModal,
  StyledClose,
  StyledImage,
  StyledContent,
  StyledAddButton
} from './style'
import { MenuItemProps } from '../../utilities/types'
import { useAppDispatch } from '../../store/hooks'
import { adicionarAoCarrinho } from '../../store/cartSlice'

type Props = {
  item: MenuItemProps
  onClose: () => void
}

const formatarPreco = (valor: number) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

const Modal = ({ item, onClose }: Props) => {
  const dispatch = useAppDispatch()

  const adicionar = () => {
    dispatch(
      adicionarAoCarrinho({
        id: item.id,
        nome: item.item_name,
        preco: item.price,
        imagem: item.item_image
      })
    )
    onClose()
  }

  return (
    <StyledOverlay onClick={onClose}>
      <StyledModal onClick={(evento) => evento.stopPropagation()}>
        <StyledClose onClick={onClose}>X</StyledClose>
        <StyledImage src={item.item_image} alt={item.item_name} />
        <StyledContent>
          <h3>{item.item_name}</h3>
          <p>{item.item_description}</p>
          <span>Serve de {item.portion}</span>
          <StyledAddButton onClick={adicionar}>
            Adicionar ao carrinho - {formatarPreco(item.price)}
          </StyledAddButton>
        </StyledContent>
      </StyledModal>
    </StyledOverlay>
  )
}

export default Modal
