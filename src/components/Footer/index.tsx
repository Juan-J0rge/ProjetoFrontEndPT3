import { Container, Logo, RedesSociais, Texto } from './styles'

import logo from '../../assets/images/logo.png'
import redesSociais from '../../assets/images/redes-sociais.png'

const Footer = () => (
  <Container>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <RedesSociais src={redesSociais} alt="Redes sociais" />
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos. A
        responsabilidade pela entrega, qualidade dos produtos e do
        estabelecimento é toda do estabelecimento contido.
      </Texto>
    </div>
  </Container>
)

export default Footer
