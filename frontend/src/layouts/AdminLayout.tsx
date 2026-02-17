import { Routes, Route } from 'react-router-dom'

export const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>
      
      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6">
            <ul className="space-y-2">
              <li><a href="/admin/analytics" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">Sales Analytics</a></li>
              <li><a href="/admin/inventory" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">Inventory</a></li>
              <li><a href="/admin/menu" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">Menu Management</a></li>
              <li><a href="/admin/expenses" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">Expenses</a></li>
              <li><a href="/admin/users" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">User Management</a></li>
            </ul>
          </div>
        </nav>
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/analytics" element={<div>Sales Analytics Tab</div>} />
            <Route path="/inventory" element={<div>Inventory Tab</div>} />
            <Route path="/menu" element={<div>Menu Management Tab</div>} />
            <Route path="/expenses" element={<div>Expenses Tab</div>} />
            <Route path="/users" element={<div>User Management Tab</div>} />
            <Route path="/" element={<div>Admin Dashboard Home</div>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
