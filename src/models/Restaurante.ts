class Restaurante {
  id: number
  apiId: number
  titulo: string
  tags: string[]
  avaliacao: number
  descricao: string
  imagem: string

  constructor(
    id: number,
    apiId: number,
    titulo: string,
    tags: string[],
    avaliacao: number,
    descricao: string,
    imagem: string
  ) {
    this.id = id
    this.apiId = apiId
    this.titulo = titulo
    this.tags = tags
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.imagem = imagem
  }
}

export default Restaurante
