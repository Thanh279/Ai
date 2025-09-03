# E-Commerce API Testing Guide

This guide provides the raw JSON data for testing all API endpoints in Postman.

## Base URL: `http://localhost:8080/api`

## 1. User APIs

### GET All Users
- **Method**: GET
- **URL**: `/users`
- **Headers**: None
- **Body**: None

### POST Create User
- **Method**: POST
- **URL**: `/users`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "username": "testuser",
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}
```

### GET User by ID
- **Method**: GET
- **URL**: `/users/{id}`
- **Headers**: None
- **Body**: None
- **Example**: `/users/507f1f77bcf86cd799439011`

### PUT Update User
- **Method**: PUT
- **URL**: `/users/{id}`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Updated User",
  "email": "updated@example.com"
}
```

### DELETE User
- **Method**: DELETE
- **URL**: `/users/{id}`
- **Headers**: None
- **Body**: None

## 2. Product APIs

### GET All Products
- **Method**: GET
- **URL**: `/products`
- **Headers**: None
- **Body**: None

### POST Create Product
- **Method**: POST
- **URL**: `/products`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "iPhone 13",
  "price": 999.99,
  "categoryId": "507f1f77bcf86cd799439012"
}
```

### GET Product by ID
- **Method**: GET
- **URL**: `/products/{id}`
- **Headers**: None
- **Body**: None

### GET Search Products
- **Method**: GET
- **URL**: `/products/search?name=iphone`
- **Headers**: None
- **Body**: None

## 3. Category APIs

### GET All Categories
- **Method**: GET
- **URL**: `/categories`
- **Headers**: None
- **Body**: None

### POST Create Category
- **Method**: POST
- **URL**: `/categories`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Electronics"
}
```

## 4. Order APIs

### GET All Orders
- **Method**: GET
- **URL**: `/orders`
- **Headers**: None
- **Body**: None

### POST Create Order
- **Method**: POST
- **URL**: `/orders`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "userId": "507f1f77bcf86cd799439011",
  "productId": "507f1f77bcf86cd799439013",
  "quantity": 2,
  "total": 1999.98
}
```

## 5. Blog APIs

### GET All Blogs
- **Method**: GET
- **URL**: `/blogs`
- **Headers**: None
- **Body**: None

### POST Create Blog
- **Method**: POST
- **URL**: `/blogs`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "title": "How to use our e-commerce platform",
  "content": "This is a detailed guide on how to use our platform..."
}
```

## 6. Wishlist APIs

### GET User Wishlist
- **Method**: GET
- **URL**: `/wishlist/user/{userId}`
- **Headers**: None
- **Body**: None

### POST Add to Wishlist
- **Method**: POST
- **URL**: `/wishlist`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "userId": "507f1f77bcf86cd799439011",
  "productId": "507f1f77bcf86cd799439013",
  "productName": "iPhone 13",
  "productPrice": 999.99,
  "productImage": "https://example.com/iphone13.jpg"
}
```

### DELETE Remove from Wishlist
- **Method**: DELETE
- **URL**: `/wishlist/{id}`
- **Headers**: None
- **Body**: None

## 7. Banner APIs

### GET All Banners
- **Method**: GET
- **URL**: `/banners`
- **Headers**: None
- **Body**: None

### GET Active Banners
- **Method**: GET
- **URL**: `/banners/active`
- **Headers**: None
- **Body**: None

### GET Banners by Type
- **Method**: GET
- **URL**: `/banners/type/{type}`
- **Headers**: None
- **Body**: None
- **Example**: `/banners/type/main`

### GET Active Banners by Type
- **Method**: GET
- **URL**: `/banners/active/type/{type}`
- **Headers**: None
- **Body**: None
- **Example**: `/banners/active/type/sidebar`

### POST Create Banner
- **Method**: POST
- **URL**: `/banners`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "title": "Summer Sale",
  "description": "Up to 50% off on all products",
  "imageUrl": "https://res.cloudinary.com/dr8r3txb8/image/upload/v1234567890/summer-sale.jpg",
  "imagePublicId": "summer-sale",
  "targetUrl": "/products?category=summer-sale",
  "displayOrder": 1,
  "active": true,
  "type": "main"
}
```

### GET Banner by ID
- **Method**: GET
- **URL**: `/banners/{id}`
- **Headers**: None
- **Body**: None

### PUT Update Banner
- **Method**: PUT
- **URL**: `/banners/{id}`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "title": "Summer Sale Updated",
  "description": "Up to 60% off on all products",
  "imageUrl": "https://res.cloudinary.com/dr8r3txb8/image/upload/v1234567890/summer-sale-updated.jpg",
  "targetUrl": "/products?category=summer-sale",
  "displayOrder": 2,
  "active": true,
  "type": "main"
}
```

### DELETE Banner
- **Method**: DELETE
- **URL**: `/banners/{id}`
- **Headers**: None
- **Body**: None

### PATCH Toggle Banner Status
- **Method**: PATCH
- **URL**: `/banners/{id}/toggle`
- **Headers**: None
- **Body**: None

## 8. Image APIs

### GET All Images
- **Method**: GET
- **URL**: `/images`
- **Headers**: None
- **Body**: None

### POST Create Image
- **Method**: POST
- **URL**: `/images`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "url": "https://example.com/iphone13-front.jpg",
  "type": "product",
  "entityId": "507f1f77bcf86cd799439012",
  "altText": "iPhone 13 front view",
  "displayOrder": 1,
  "publicId": "cloudinary_public_id_here"
}
```

### POST Upload Image to Cloudinary
- **Method**: POST
- **URL**: `/images/upload`
- **Headers**: `Content-Type: multipart/form-data`
- **Body (form-data)**:
  - `file`: Select file to upload
  - `type`: "product" (or "banner", "category", "user")
  - `entityId`: "507f1f77bcf86cd799439012"
  - `altText`: "iPhone 13 front view" (optional)
  - `displayOrder`: "1" (optional, default: 0)

### GET Image by ID
- **Method**: GET
- **URL**: `/images/{id}`
- **Headers**: None
- **Body**: None

### GET Images by Entity ID
- **Method**: GET
- **URL**: `/images/entity/{entityId}`
- **Headers**: None
- **Body**: None

### GET Images by Type
- **Method**: GET
- **URL**: `/images/type/{type}`
- **Headers**: None
- **Body**: None

### GET Images by Entity ID and Type
- **Method**: GET
- **URL**: `/images/entity/{entityId}/type/{type}`
- **Headers**: None
- **Body**: None

### PUT Update Image
- **Method**: PUT
- **URL**: `/images/{id}`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "url": "https://example.com/iphone13-back.jpg",
  "type": "product",
  "entityId": "507f1f77bcf86cd799439012",
  "altText": "iPhone 13 back view",
  "displayOrder": 2
}
```

### DELETE Image
- **Method**: DELETE
- **URL**: `/images/{id}`
- **Headers**: None
- **Body**: None

### DELETE Images by Entity ID
- **Method**: DELETE
- **URL**: `/images/entity/{entityId}`
- **Headers**: None
- **Body**: None

### DELETE Images by Entity ID and Type
- **Method**: DELETE
- **URL**: `/images/entity/{entityId}/type/{type}`
- **Headers**: None
- **Body**: None

## Testing Tips:

1. Start by creating a user first to get a valid user ID
2. Then create a category to get a category ID
3. Create products using the category ID
4. Create images for products, banners, etc. using the image APIs
5. Create orders using user ID and product ID
6. Test wishlist functionality with user ID and product ID

Replace the placeholder IDs (`507f1f77bcf86cd799439011`, etc.) with actual IDs from your database after creating the respective entities.
