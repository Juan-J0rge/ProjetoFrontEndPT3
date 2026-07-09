import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Carrinho from './components/Carrinho'
import { GlobalCss } from './styles'
import store from './store'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalCss />
        <Header />
        <Rotas />
        <Footer />
        <Carrinho />
      </Provider>
    </BrowserRouter>
  )
}

export default App
