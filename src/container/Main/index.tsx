import { useEffect, useState } from 'react'
import StyledMain from './style'

import Card from '../../components/Card'
import { CardProps, RestauranteAPI } from '../../utilities/types'
import { getRestaurantes } from '../../services/api'

const converterParaCard = (restaurante: RestauranteAPI): CardProps => {
  const tags = [restaurante.tipo]
  if (restaurante.destacado) {
    tags.unshift('Destaque da semana')
  }

  return {
    image: restaurante.capa,
    title: restaurante.titulo,
    desciption: restaurante.descricao,
    tags,
    note: restaurante.avaliacao,
    page: String(restaurante.id)
  }
}

const Main = () => {
  const [restaurantes, setRestaurantes] = useState<CardProps[]>([])

  useEffect(() => {
    getRestaurantes()
      .then((dados) => setRestaurantes(dados.map(converterParaCard)))
      .catch(() => setRestaurantes([]))
  }, [])

  return (
    <StyledMain>
      {restaurantes.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          desciption={card.desciption}
          title={card.title}
          tags={card.tags}
          note={card.note}
          page={card.page}
        />
      ))}
    </StyledMain>
  )
}

export default Main
