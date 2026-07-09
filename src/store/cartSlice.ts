import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../models/Prato'

type CartState = {
  itens: Prato[]
  aberto: boolean
}

const initialState: CartState = {
  itens: [],
  aberto: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Prato>) => {
      state.itens.push(action.payload)
      state.aberto = true
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens.splice(action.payload, 1)
    },
    abrirCarrinho: (state) => {
      state.aberto = true
    },
    fecharCarrinho: (state) => {
      state.aberto = false
    },
    alternarCarrinho: (state) => {
      state.aberto = !state.aberto
    }
  }
})

export const {
  adicionar,
  remover,
  abrirCarrinho,
  fecharCarrinho,
  alternarCarrinho
} = cartSlice.actions

export default cartSlice.reducer
