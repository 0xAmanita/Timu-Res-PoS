import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Timu POS</h1>
          <p className="text-gray-600">Point of Sale System</p>
        </div>
        {children}
      </div>
    </div>
  )
}
