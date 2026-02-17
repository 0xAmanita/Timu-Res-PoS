# Timu POS

A modern Point of Sale system built for small restaurants, featuring real-time inventory management, comprehensive reporting, and role-based access control.

## Features

- **User Management**: Admin and Cashier roles with JWT authentication
- **Order Processing**: Complete order workflow with payment tracking
- **Inventory Management**: Real-time stock tracking with transaction logs
- **Reporting**: Daily, weekly, and monthly analytics with interactive charts
- **Expense Tracking**: Business expense categorization and financial reporting

## Tech Stack

**Backend**
- .NET 8 Web API with Clean Architecture
- Entity Framework Core + PostgreSQL
- JWT Authentication
- Swagger API documentation

**Frontend**
- React 18 + TypeScript
- Vite for fast development
- Redux Toolkit for state management
- React Query for server state
- Tailwind CSS for styling
- Recharts for data visualization

## Getting Started

### Prerequisites
- .NET 8 SDK
- Node.js 18+
- PostgreSQL

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Timu
   ```

2. **Backend Setup**
   ```bash
   cd backend
   dotnet restore
   dotnet build
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Database Setup**
   ```bash
   # Create PostgreSQL database
   createdb timu_pos
   
   # Update connection string in backend/src/POS.API/appsettings.json
   # Run migrations
   cd backend
   dotnet ef database update --project src/POS.Infrastructure --startup-project src/POS.API
   ```

### Development

**Start the backend server:**
```bash
cd backend
dotnet run --project src/POS.API
# API runs on http://localhost:5000
```

**Start the frontend development server:**
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:3000
```

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── POS.API/           # Controllers, middleware, configuration
│   │   ├── POS.Application/   # Business logic, services, DTOs
│   │   ├── POS.Domain/        # Domain entities and business rules
│   │   └── POS.Infrastructure/ # Data access, external services
│   └── tests/                 # Unit and integration tests
├── frontend/
│   ├── src/
│   │   ├── app/              # App configuration and routing
│   │   ├── features/         # Feature-based modules
│   │   ├── layouts/          # Page layouts
│   │   ├── components/       # Reusable UI components
│   │   ├── lib/              # Utilities and configurations
│   │   ├── store/            # Redux state management
│   │   └── types/            # TypeScript type definitions
│   └── public/               # Static assets
```

## API Documentation

Once the backend is running, visit `http://localhost:5000/swagger` for interactive API documentation.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
