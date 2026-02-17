# Timu POS Backend

.NET 8 Web API for the Timu Point of Sale system using Clean Architecture.

## Tech Stack

- .NET 8 Web API
- Entity Framework Core + PostgreSQL
- JWT Authentication
- Clean Architecture pattern

## Project Structure

```
src/
├── POS.API/           # Controllers, middleware, configuration
├── POS.Application/   # Business logic, services, DTOs
├── POS.Domain/        # Domain entities and business rules
└── POS.Infrastructure/ # Data access, external services
```

## Quick Start

1. **Install dependencies**
   ```bash
   dotnet restore
   ```

2. **Build the project**
   ```bash
   dotnet build
   ```

3. **Update database connection**
   - Edit `src/POS.API/appsettings.json`
   - Set PostgreSQL connection string

4. **Run migrations**
   ```bash
   dotnet ef database update --project src/POS.Infrastructure --startup-project src/POS.API
   ```

5. **Start the API**
   ```bash
   dotnet run --project src/POS.API
   ```

API runs on `http://localhost:5000`  
Swagger documentation: `http://localhost:5000/swagger`

## Key Features

- User authentication (Admin/Cashier roles)
- Menu item management
- Order processing workflow
- Inventory tracking
- Daily/weekly/monthly reporting
- Expense tracking
