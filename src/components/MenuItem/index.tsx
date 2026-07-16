import StyledMenuItem from './style'

import { StyledMenuItemButton } from '../Button/style'
import { MenuItemProps } from '../../utilities/types'

type Props = MenuItemProps & {
  onOpenModal: (item: MenuItemProps) => void
}

const MenuItem = (props: Props) => (
  <StyledMenuItem>
    <img src={props.item_image} alt={props.item_name} />
    <h3>{props.item_name}</h3>
    <p>{props.item_description}</p>
    <StyledMenuItemButton onClick={() => props.onOpenModal(props)}>
      Mais detalhes
    </StyledMenuItemButton>
  </StyledMenuItem>
)

export default MenuItem
