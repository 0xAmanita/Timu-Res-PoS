export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(amount)
}

export const formatDate = (date: Date | string): string => {
  return new Intl.DateTimeFormat('en-PH').format(new Date(date))
}

export const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `ORD-${timestamp}-${random}`
}
