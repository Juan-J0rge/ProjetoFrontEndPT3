import ProductsList from '../../components/ProductsList'
import Restaurante from '../../models/Restaurante'

import hokiSushi from '../../assets/images/hoki-sushi.png'
import pasta from '../../assets/images/pasta.png'

const japonesa: Restaurante[] = [
  new Restaurante(
    1,
    1,
    'Hoki Sushi',
    ['Destaque da semana', 'Japonesa'],
    4.9,
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    hokiSushi
  )
]

const italiana: Restaurante[] = [
  new Restaurante(
    2,
    2,
    'La Dolce Vita Trattoria',
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    pasta
  )
]

const Categories = () => (
  <>
    <ProductsList restaurantes={japonesa} title="Japonesa" />
    <ProductsList restaurantes={italiana} title="Italiana" />
  </>
)

export default Categories
