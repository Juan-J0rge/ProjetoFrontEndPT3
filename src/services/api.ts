import { RestauranteAPI } from '../utilities/types'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export const getRestaurantes = async (): Promise<RestauranteAPI[]> => {
  const resposta = await fetch(API_URL)

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os restaurantes')
  }

  return resposta.json()
}

export const getRestaurantePorId = async (
  id: number
): Promise<RestauranteAPI | undefined> => {
  const restaurantes = await getRestaurantes()
  return restaurantes.find((restaurante) => restaurante.id === id)
}
