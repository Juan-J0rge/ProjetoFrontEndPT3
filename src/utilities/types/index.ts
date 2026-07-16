export type CardProps = {
  image: string
  title: string
  desciption: string
  tags: string[]
  note: number
  page: string
}

export type MenuItemProps = {
  id: number
  item_name: string
  item_description: string
  item_image: string
  price: number
  portion: string
}

export type RestaurantPageProps = {
  name: string
  food_type: string
  hero_image: string
  menu_itens: MenuItemProps[]
}

// Tipos referentes ao retorno da API da efood
export type ProdutoAPI = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type RestauranteAPI = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ProdutoAPI[]
}
