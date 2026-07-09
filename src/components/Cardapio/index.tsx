import { Prato } from '../../models/Prato'
import Button from '../Button'

import { Container, Lista, Card, Capa, Titulo, Descricao } from './styles'

type Props = {
  pratos: Prato[]
  aoSelecionarPrato: (prato: Prato) => void
}

const Cardapio = ({ pratos, aoSelecionarPrato }: Props) => (
  <Container>
    <div className="container">
      <Lista>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <Card>
              <Capa style={{ backgroundImage: `url(${prato.foto})` }} />
              <Titulo>{prato.nome}</Titulo>
              <Descricao>{prato.descricao}</Descricao>
              <Button
                type="button"
                title={`Ver detalhes de ${prato.nome}`}
                onClick={() => aoSelecionarPrato(prato)}
              >
                Mais detalhes
              </Button>
            </Card>
          </li>
        ))}
      </Lista>
    </div>
  </Container>
)

export default Cardapio
