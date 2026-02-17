import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  totalPrice: number
}

interface CartState {
  items: CartItem[]
  subtotal: number
  discount: number
  total: number
  paymentMethod: 'Cash' | 'Gcash' | null
}

const initialState: CartState = {
  items: [],
  subtotal: 0,
  discount: 0,
  total: 0,
  paymentMethod: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity' | 'totalPrice'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
        existingItem.totalPrice = existingItem.quantity * existingItem.price
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        })
      }
      cartSlice.caseReducers.calculateTotals(state)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      cartSlice.caseReducers.calculateTotals(state)
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
        item.totalPrice = item.quantity * item.price
      }
      cartSlice.caseReducers.calculateTotals(state)
    },
    applyDiscount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload
      cartSlice.caseReducers.calculateTotals(state)
    },
    setPaymentMethod: (state, action: PayloadAction<'Cash' | 'Gcash'>) => {
      state.paymentMethod = action.payload
    },
    clearCart: (state) => {
      return initialState
    },
    calculateTotals: (state) => {
      state.subtotal = state.items.reduce((sum, item) => sum + item.totalPrice, 0)
      state.total = state.subtotal - state.discount
    },
  },
})

export const { addItem, removeItem, updateQuantity, applyDiscount, setPaymentMethod, clearCart } = cartSlice.actions
export default cartSlice.reducer
