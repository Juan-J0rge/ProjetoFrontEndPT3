import Restaurante from '../../models/Restaurante'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title?: string
  restaurantes: Restaurante[]
}

const ProductsList = ({ title, restaurantes }: Props) => (
  <Container>
    <div className="container">
      {title && <h2>{title}</h2>}
      <List>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Product
              id={restaurante.apiId}
              titulo={restaurante.titulo}
              tags={restaurante.tags}
              avaliacao={restaurante.avaliacao}
              descricao={restaurante.descricao}
              imagem={restaurante.imagem}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
