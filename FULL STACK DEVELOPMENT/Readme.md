# express products API
## Setup
'''bash
npm install
node server.js
README.md
# 📦 Express Products API

A RESTful API built with Express.js that handles product CRUD operations, with support for filtering, pagination, search, authentication, and logging.

🚀 Getting Started

## Prerequisites
- Node.js v18+
- npm

### Installation
```bash
git clone https://github.com/YOUR_USERNAME/express-products-api.git
cd express-products-api
npm install
cp .env.example .env
```

### Running the Server
```bash
node server.js
```

## 🔐 Environment Variables
Create a `.env` file:
```
PORT=3000
API_KEY=your-secret-api-key
```

## 📚 API Endpoints

### 🔸 GET /api/products
List all products.
**Query params:** `category`, `search`, `page`, `limit`

###  GET /api/products/:id
Get a product by ID

###POST /api/products
Create a new product
```json
{
  "name": "Laptop",
  "description": "High-end gaming laptop",
  "price": 2500,
  "category": "electronics",
  "inStock": true
}
```

### 🔸 PUT /api/products/:id
Update a product

### DELETE /api/products/:id
Delete a product

###GET /api/products/stats
Get product statistics by category
