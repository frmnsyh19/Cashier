import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemType = {
  nama: string;
  id: number;
  qty: number;
  image: string;
  price: number;
  total: number;
};

type InitialValueType = {
  items: ItemType[];
};

const initialState: InitialValueType = {
  items: [],
};

const BagSlicer = createSlice({
  name: "BagSlicer",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemType>) => {
      // state.items.push(action.payload);
      const exist = state.items.find((i) => i.id === action.payload.id);
      if (exist) {
        // Update qty
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: item.qty + action.payload.qty,
                total: item.total + action.payload.total,
              }
            : item
        );
      } else {
        // Push item baru
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;

      if (item.qty > 1) {
        state.items = state.items.map((i) =>
          i.id === action.payload
            ? {
                ...i,
                qty: i.qty - 1,
                total: i.total - item.price, // kurangi total berdasarkan harga per unit
              }
            : i
        );
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    addQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;
      state.items = state.items.map((i) =>
        i.id === action.payload
          ? {
              ...i,
              qty: i.qty + 1,
              total: i.total + item.price, // tambahkan total berdasarkan harga per unit
            }
          : i
      );
    },
    minusQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;

      if (item.qty > 1) {
        state.items = state.items.map((i) =>
          i.id === action.payload
            ? {
                ...i,
                qty: i.qty - 1,
                total: i.total - item.price, // kurangi total berdasarkan harga per unit
              }
            : i
        );
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    clearBag: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearBag, addQty, minusQty } =
  BagSlicer.actions;
export const BagReducer = BagSlicer.reducer;
