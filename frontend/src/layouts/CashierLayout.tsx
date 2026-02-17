export const CashierLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900">Cashier Dashboard</h1>
        </div>
      </header>
      
      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
          {/* POS Screen */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Menu Items</h2>
            <div className="text-gray-500">POS Screen will be implemented here</div>
          </div>
          
          {/* Cart Panel */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Current Order</h2>
            <div className="text-gray-500">Cart Panel will be implemented here</div>
          </div>
          
          {/* Today Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Today's Summary</h2>
            <div className="text-gray-500">Summary Panel will be implemented here</div>
          </div>
        </div>
      </main>
    </div>
  )
}
