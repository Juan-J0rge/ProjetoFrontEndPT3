import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { RestauranteDetalhe } from '../../models/RestauranteDetalhe'
import { Prato } from '../../models/Prato'

import BannerRestaurante from '../../components/BannerRestaurante'
import Cardapio from '../../components/Cardapio'
import ModalPrato from '../../components/ModalPrato'

import { Carregando } from './styles'

const Restaurante = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<RestauranteDetalhe | null>(
    null
  )
  const [erro, setErro] = useState('')
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  useEffect(() => {
    const url = 'https://api-ebac.vercel.app/api/efood/restaurantes'

    setErro('')
    setRestaurante(null)

    fetch(url)
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error(
            `A API respondeu com o status ${resposta.status} para ${url}`
          )
        }
        return resposta.json()
      })
      .then((dados: RestauranteDetalhe[]) => {
        const encontrado = dados.find(
          (restauranteApi) => restauranteApi.id === Number(id)
        )

        if (!encontrado) {
          throw new Error(`Restaurante com id ${id} não foi encontrado`)
        }

        setRestaurante(encontrado)
      })
      .catch((erroCapturado) => {
        console.error('Falha ao buscar restaurante:', erroCapturado)
        setErro(erroCapturado.message)
      })
  }, [id])

  if (erro) {
    return <Carregando>Não foi possível carregar: {erro}</Carregando>
  }

  if (!restaurante) {
    return <Carregando>Carregando...</Carregando>
  }

  return (
    <>
      <BannerRestaurante
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <Cardapio
        pratos={restaurante.cardapio}
        aoSelecionarPrato={setPratoSelecionado}
      />
      {pratoSelecionado && (
        <ModalPrato
          prato={pratoSelecionado}
          aoFechar={() => setPratoSelecionado(null)}
        />
      )}
    </>
  )
}

export default Restaurante
