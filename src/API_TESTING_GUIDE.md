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

### GET All Products with Images
- **Method**: GET
- **URL**: `/products/with-images`
- **Headers**: None
- **Body**: None

**Example Response:**
```json
[
  {
    "id": "68b171a80f85cca4021f6138",
    "name": "Áo thun tay lõ",
    "price": 10.0,
    "categoryId": "68b16ba21b9acc35d945a285",
    "images": [
      {
        "id": "68b16e5b0f85cca4021f6132",
        "url": "https://res.cloudinary.com/dr8r3txb8/image/upload/v1756458586/ecommerce/product/1_1756458585285.png",
        "altText": "Áo thun tay lõ",
        "displayOrder": 1,
        "publicId": "ecommerce/product/1_1756458585285"
      }
    ]
  }
]
```

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

### GET Product Images
- **Method**: GET
- **URL**: `/products/{id}/images`
- **Headers**: None
- **Body**: None
- **Description**: Get all detail images for a specific product

## 2.5 Brand APIs

### GET All Brands
- **Method**: GET
- **URL**: `/brands`
- **Headers**: None
- **Body**: None

### GET Active Brands
- **Method**: GET
- **URL**: `/brands/active`
- **Headers**: None
- **Body**: None

### GET Brand by ID
- **Method**: GET
- **URL**: `/brands/{id}`
- **Headers**: None
- **Body**: None

### POST Create Brand
- **Method**: POST
- **URL**: `/brands`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Nike",
  "description": "Sportswear brand",
  "logoUrl": "https://example.com/nike-logo.png"
}
```

### PUT Update Brand
- **Method**: PUT
- **URL**: `/brands/{id}`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Nike Updated",
  "description": "Leading sportswear brand",
  "logoUrl": "https://example.com/nike-logo-updated.png",
  "active": true
}
```

### DELETE Brand
- **Method**: DELETE
- **URL**: `/brands/{id}`
- **Headers**: None
- **Body**: None

## 3. Category APIs

### GET All Categories
- **Method**: GET
- **URL**: `/categories`
- **Headers**: None
- **Body**: None

### GET Nested Categories
- **Method**: GET
- **URL**: `/categories/nested`
- **Headers**: None
- **Body**: None
- **Description**: Returns categories in a nested structure with parent and child categories.
```json

  {
    "id": "507f1f77bcf86cd799439011",
    "name": "Men",
    "parentId": null,
    "children": [
      {
        "id": "507f1f77bcf86cd799439012",
        "name": "Shirts",
        "parentId": "507f1f77bcf86cd799439011",
        "children": []
      },
      {
        "id": "507f1f77bcf86cd799439013",
        "name": "Pants",
        "parentId": "507f1f77bcf86cd799439011",
        "children": []
      }
    ]
  }
  ```

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

## 6.5 Reviews APIs

### GET Product Reviews
- **Method**: GET
- **URL**: `/reviews/{productId}`
- **Headers**: None
- **Body**: None

### POST Submit Review
- **Method**: POST
- **URL**: `/reviews`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "productId": "507f1f77bcf86cd799439011",
  "userId": "507f1f77bcf86cd799439012",
  "rating": 5,
  "comment": "Great product!"
}
```

### GET Average Rating
- **Method**: GET
- **URL**: `/reviews/{productId}/rating`
- **Headers**: None
- **Body**: None

### PUT Update Review
- **Method**: PUT
- **URL**: `/reviews/{reviewId}`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "rating": 4,
  "comment": "Updated review"
}
```

### DELETE Review
- **Method**: DELETE
- **URL**: `/reviews/{reviewId}`
- **Headers**: None
- **Body**: None

## 6.6 Payment APIs

### POST Process Payment
- **Method**: POST
- **URL**: `/payment`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "orderId": "507f1f77bcf86cd799439011",
  "amount": 999.99,
  "paymentMethod": "credit_card",
  "cardDetails": {
    "number": "4111111111111111",
    "expiry": "12/25",
    "cvv": "123"
  }
}
```

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

### GET Banner Images
- **Method**: GET
- **URL**: `/banners/{id}/images`
- **Headers**: None
- **Body**: None
- **Description**: Get all detail images for a specific banner

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

## 9. Size APIs

### GET All Sizes
- **Method**: GET
- **URL**: `/sizes`
- **Headers**: None
- **Body**: None

### GET Active Sizes
- **Method**: GET
- **URL**: `/sizes/active`
- **Headers**: None
- **Body**: None

### GET Size by ID
- **Method**: GET
- **URL**: `/sizes/{id}`
- **Headers**: None
- **Body**: None

### POST Create Size
- **Method**: POST
- **URL**: `/sizes`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "M",
  "category": "clothing",
  "description": "Medium size for clothing"
}
```

### PUT Update Size
- **Method**: PUT
- **URL**: `/sizes/{id}`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "L",
  "category": "clothing",
  "description": "Large size for clothing",
  "active": true
}
```

### DELETE Size
- **Method**: DELETE
- **URL**: `/sizes/{id}`
- **Headers**: None
- **Body**: None

## 10. Color APIs

### GET All Colors
- **Method**: GET
- **URL**: `/colors`
- **Headers**: None
- **Body**: None

### GET Active Colors
- **Method**: GET
- **URL**: `/colors/active`
- **Headers**: None
- **Body**: None

### GET Color by ID
- **Method**: GET
- **URL**: `/colors/{id}`
- **Headers**: None
- **Body**: None

### POST Create Color
- **Method**: POST
- **URL**: `/colors`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Red",
  "hexCode": "#FF0000"
}
```

### PUT Update Color
- **Method**: PUT
- **URL**: `/colors/{id}`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Dark Red",
  "hexCode": "#8B0000",
  "active": true
}
```

### DELETE Color
- **Method**: DELETE
- **URL**: `/colors/{id}`
- **Headers**: None
- **Body**: None

## 11. Material APIs

### GET All Materials
- **Method**: GET
- **URL**: `/materials`
- **Headers**: None
- **Body**: None

### GET Active Materials
- **Method**: GET
- **URL**: `/materials/active`
- **Headers**: None
- **Body**: None

### GET Material by ID
- **Method**: GET
- **URL**: `/materials/{id}`
- **Headers**: None
- **Body**: None

### POST Create Material
- **Method**: POST
- **URL**: `/materials`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Cotton",
  "description": "100% cotton material"
}
```

### PUT Update Material
- **Method**: PUT
- **URL**: `/materials/{id}`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Organic Cotton",
  "description": "100% organic cotton material",
  "active": true
}
```

### DELETE Material
- **Method**: DELETE
- **URL**: `/materials/{id}`
- **Headers**: None
- **Body**: None

## 12. Tag APIs

### GET All Tags
- **Method**: GET
- **URL**: `/tags`
- **Headers**: None
- **Body**: None

### GET Active Tags
- **Method**: GET
- **URL**: `/tags/active`
- **Headers**: None
- **Body**: None

### GET Tag by ID
- **Method**: GET
- **URL**: `/tags/{id}`
- **Headers**: None
- **Body**: None

### POST Create Tag
- **Method**: POST
- **URL**: `/tags`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Summer Collection",
  "type": "season"
}
```

### PUT Update Tag
- **Method**: PUT
- **URL**: `/tags/{id}`
- **Headers**: `Content-Type: application/json`
- **Body (raw JSON)**:
```json
{
  "name": "Summer 2024 Collection",
  "type": "season",
  "active": true
}
```

### DELETE Tag
- **Method**: DELETE
- **URL**: `/tags/{id}`
- **Headers**: None
- **Body**: None

## 13. Product Filter APIs

### GET Filter Products
- **Method**: GET
- **URL**: `/products/filter?categoryId=xxx&sizeIds=id1,id2&colorIds=id3,id4&materialIds=id5,id6&tagIds=id7,id8&minPrice=10&maxPrice=100&gender=male&onSale=true`
- **Headers**: None
- **Body**: None
- **Parameters**:
  - `categoryId`: Filter by category
  - `sizeIds`: Comma-separated size IDs
  - `colorIds`: Comma-separated color IDs
  - `materialIds`: Comma-separated material IDs
  - `tagIds`: Comma-separated tag IDs
  - `minPrice`: Minimum price
  - `maxPrice`: Maximum price
  - `gender`: Filter by gender (male/female/unisex)
  - `onSale`: Filter products on sale (true/false)

## Testing Tips:

1. Start by creating a user first to get a valid user ID
2. Then create a category to get a category ID
3. Create sizes, colors, materials, and tags to get their IDs
4. Create products using the category ID and reference IDs for sizes, colors, materials, tags
5. Create images for products, banners, etc. using the image APIs
6. Create orders using user ID and product ID
7. Test wishlist functionality with user ID and product ID
8. Test advanced filtering with the new modular attributes

Replace the placeholder IDs (`507f1f77bcf86cd799439011`, etc.) with actual IDs from your database after creating the respective entities.
