import { useEffect, useState } from 'react'

import HeaderWithCart from '../../container/HeaderWithCart'
import MenuList from '../../container/MenuList'

import { getRestaurantePorId } from '../../services/api'
import { RestaurantPageProps, RestauranteAPI } from '../../utilities/types'

const converterParaPagina = (
  restaurante: RestauranteAPI
): RestaurantPageProps => ({
  name: restaurante.titulo,
  food_type: restaurante.tipo,
  hero_image: restaurante.capa,
  menu_itens: restaurante.cardapio.map((produto) => ({
    id: produto.id,
    item_name: produto.nome,
    item_description: produto.descricao,
    item_image: produto.foto,
    price: produto.preco,
    portion: produto.porcao
  }))
})

const Restaurants = () => {
  const [restaurante, setRestaurante] = useState<RestaurantPageProps | null>(
    null
  )
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  const parametros = new URLSearchParams(window.location.search)
  const id = Number(parametros.get('q'))

  useEffect(() => {
    if (!id) {
      window.location.href = window.location.origin
      return
    }

    getRestaurantePorId(id)
      .then((dados) => {
        if (!dados) {
          setErro(true)
          return
        }
        setRestaurante(converterParaPagina(dados))
        document.title = 'eFood | ' + dados.titulo
      })
      .catch(() => setErro(true))
      .finally(() => setCarregando(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (erro) {
    window.location.href = window.location.origin
    return null
  }

  return (
    <>
      <HeaderWithCart />
      {!carregando && restaurante && (
        <MenuList
          name={restaurante.name}
          food_type={restaurante.food_type}
          hero_image={restaurante.hero_image}
          menu_itens={restaurante.menu_itens}
        />
      )}
    </>
  )
}

export default Restaurants
