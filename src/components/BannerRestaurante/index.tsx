import { Container, Overlay, Tipo, Titulo } from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const BannerRestaurante = ({ capa, tipo, titulo }: Props) => (
  <Container style={{ backgroundImage: `url(${capa})` }}>
    <Overlay>
      <div className="container">
        <Tipo>{tipo}</Tipo>
        <Titulo>{titulo}</Titulo>
      </div>
    </Overlay>
  </Container>
)

export default BannerRestaurante
