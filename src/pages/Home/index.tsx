import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Restaurante from '../../models/Restaurante'

import hokiSushi from '../../assets/images/hoki-sushi.png'
import pasta from '../../assets/images/pasta.png'

const restaurantes: Restaurante[] = [
  new Restaurante(
    1,
    1,
    'Hoki Sushi',
    ['Destaque da semana', 'Japonesa'],
    4.9,
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    hokiSushi
  ),
  new Restaurante(
    2,
    2,
    'La Dolce Vita Trattoria',
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    pasta
  ),
  new Restaurante(
    3,
    2,
    'La Dolce Vita Trattoria',
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    pasta
  ),
  new Restaurante(
    4,
    2,
    'La Dolce Vita Trattoria',
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    pasta
  ),
  new Restaurante(
    5,
    2,
    'La Dolce Vita Trattoria',
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    pasta
  ),
  new Restaurante(
    6,
    2,
    'La Dolce Vita Trattoria',
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    pasta
  )
]

const Home = () => (
  <>
    <Banner />
    <ProductsList restaurantes={restaurantes} />
  </>
)

export default Home
