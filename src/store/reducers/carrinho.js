import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    mudarCarrinho: (state, params) => {
      // Função para adicionar ou remover as infos do state
      const temItem = state.some((item) => item.id === params.payload);

      if (!temItem) {
        return [
          ...state,
          {
            id: params.payload,
            quantidade: 1,
          },
        ];
      }
      return state.filter((item) => item.id !== params.payload);
    },
    mudarQuantidade: (state, { payload }) => {
      state = state.map((itemNoCarrinho) => {
        if (itemNoCarrinho.id === payload.id)
          itemNoCarrinho.quantidade += payload.quantidade;
        return itemNoCarrinho;
      });
    },
    resetarCarrinho: () => initialState,
  },
});

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
