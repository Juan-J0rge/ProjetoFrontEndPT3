import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  cartId: string
  id: number
  nome: string
  preco: number
  imagem: string
}

type CartState = {
  itens: CartItem[]
  estaAberto: boolean
}

const initialState: CartState = {
  itens: [],
  estaAberto: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho: (
      state,
      action: PayloadAction<Omit<CartItem, 'cartId'>>
    ) => {
      state.itens.push({
        ...action.payload,
        // cada clique gera um item novo no carrinho (mesmo que seja o
        // mesmo produto), por isso precisamos de um id único aqui
        cartId: `${action.payload.id}-${Date.now()}-${Math.random()}`
      })
      state.estaAberto = true
    },
    removerDoCarrinho: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter((item) => item.cartId !== action.payload)
    },
    abrirCarrinho: (state) => {
      state.estaAberto = true
    },
    fecharCarrinho: (state) => {
      state.estaAberto = false
    }
  }
})

export const {
  adicionarAoCarrinho,
  removerDoCarrinho,
  abrirCarrinho,
  fecharCarrinho
} = cartSlice.actions

export default cartSlice.reducer
