import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'
import { CashierLayout } from '../layouts/CashierLayout'
import { AdminLayout } from '../layouts/AdminLayout'
import { Login } from '../features/auth/Login'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/cashier" element={<CashierLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
