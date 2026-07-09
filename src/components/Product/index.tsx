import Tag from '../Tag'
import Button from '../Button'

import {
  Card,
  Capa,
  Tags,
  Cabecalho,
  Titulo,
  Avaliacao,
  Descricao
} from './styles'

type Props = {
  id: number
  titulo: string
  tags: string[]
  avaliacao: number
  descricao: string
  imagem: string
}

const Product = ({ id, titulo, tags, avaliacao, descricao, imagem }: Props) => (
  <Card>
    <Capa style={{ backgroundImage: `url(${imagem})` }}>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </Capa>
    <Cabecalho>
      <Titulo>{titulo}</Titulo>
      <Avaliacao>
        {avaliacao.toFixed(1)} <span>★</span>
      </Avaliacao>
    </Cabecalho>
    <Descricao>{descricao}</Descricao>
    <Button
      type="link"
      to={`/restaurante/${id}`}
      title={`Saiba mais sobre ${titulo}`}
    >
      Saiba mais
    </Button>
  </Card>
)

export default Product
