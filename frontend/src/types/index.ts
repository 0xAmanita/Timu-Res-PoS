export interface User {
  id: number
  username: string
  role: 'Admin' | 'Cashier'
  createdAt: string
}

export interface MenuItem {
  id: number
  name: string
  price: number
  cost: number
  stock: number
  isAvailable: boolean
  createdAt: string
  updatedAt: string
}

export interface Order {
  id: number
  orderNumber: string
  cashierId: number
  subtotal: number
  discount: number
  total: number
  paymentMethod: 'Cash' | 'Gcash'
  timestamp: string
  status: 'pending' | 'completed' | 'cancelled'
}

export interface OrderItem {
  id: number
  orderId: number
  menuItemId: number
  quantity: number
  unitPrice: number
  totalPrice: number
}

export interface InventoryTransaction {
  id: number
  menuItemId: number
  changeQuantity: number
  reason: string
  createdAt: string
}

export interface Expense {
  id: number
  description: string
  amount: number
  category: 'Rent' | 'Utilities' | 'Supplies'
  date: string
  createdAt: string
}

export interface DailySummary {
  date: string
  totalSales: number
  totalOrders: number
  cashAmount: number
  gcashAmount: number
}
