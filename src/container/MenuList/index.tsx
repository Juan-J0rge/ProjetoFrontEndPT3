import { useState } from 'react'
import StyledMenuList from './style'

import Hero from '../Hero'

import MenuItem from '../../components/MenuItem'
import Modal from '../../components/Modal'
import { MenuItemProps, RestaurantPageProps } from '../../utilities/types'

const MenuList = (props: RestaurantPageProps) => {
  const [itemSelecionado, setItemSelecionado] = useState<MenuItemProps | null>(
    null
  )

  return (
    <>
      <Hero
        food_type={props.food_type}
        name={props.name}
        hero_image={props.hero_image}
      />
      <div className="container">
        <StyledMenuList>
          {props.menu_itens.map((item, index) => (
            <MenuItem
              key={index}
              id={item.id}
              item_name={item.item_name}
              item_description={item.item_description}
              item_image={item.item_image}
              price={item.price}
              portion={item.portion}
              onOpenModal={setItemSelecionado}
            />
          ))}
        </StyledMenuList>
      </div>
      {itemSelecionado && (
        <Modal
          item={itemSelecionado}
          onClose={() => setItemSelecionado(null)}
        />
      )}
    </>
  )
}

export default MenuList
