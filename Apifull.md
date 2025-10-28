
# E-Commerce API Documentation

This document provides a comprehensive list of all REST API endpoints available in the E-Commerce application.

## Table of Contents
- [BannerController](#bannercontroller)
- [BlogController](#blogcontroller)
- [BrandController](#brandcontroller)
- [CartController](#cartcontroller)
- [CartItemController](#cartitemcontroller)
- [CategoryController](#categorycontroller)
- [ColorController](#colorcontroller)
- [CouponController](#couponcontroller)
- [EmailTemplateController](#emailtemplatecontroller)
- [ImageController](#imagecontroller)
- [InventoryTransactionController](#inventorytransactioncontroller)
- [MaterialController](#materialcontroller)
- [OrderController](#ordercontroller)
- [OrderCouponController](#ordercouponcontroller)
- [OrderItemController](#orderitemcontroller)
- [OrderStatusHistoryController](#orderstatushistorycontroller)
- [PageController](#pagecontroller)
- [ProductAttributeController](#productattributecontroller)
- [ProductController](#productcontroller)
- [ProductFilterController](#productfiltercontroller)
- [ProductTagController](#producttagcontroller)
- [ProductVariantController](#productvariantcontroller)
- [ProductViewController](#productviewcontroller)
- [ReviewController](#reviewcontroller)
- [ReviewHelpfulVoteController](#reviewhelpfulvotecontroller)
- [ReviewImageController](#reviewimagecontroller)
- [ReviewResponseController](#reviewresponsecontroller)
- [RoleController](#rolecontroller)
- [ScheduledTaskController](#scheduledtaskcontroller)
- [SearchQueryController](#searchquerycontroller)
- [SizeController](#sizecontroller)
- [StockAlertController](#stockalertcontroller)
- [SystemSettingController](#systemsettingcontroller)
- [TagController](#tagcontroller)
- [UserAddressController](#useraddresscontroller)
- [UserController](#usercontroller)
- [UserRoleController](#userrolecontroller)
- [WishlistController](#wishlistcontroller)

---

## BannerController
**Base Path:** `/api/banners`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/banners` | Get all banners |
| GET | `/api/banners/active` | Get active banners |
| GET | `/api/banners/type/{type}` | Get banners by type |
| GET | `/api/banners/active/type/{type}` | Get active banners by type |
| POST | `/api/banners` | Create a new banner |
| GET | `/api/banners/{id}` | Get banner by ID |
| GET | `/api/banners/{id}/images` | Get images for a banner |
| PUT | `/api/banners/{id}` | Update banner by ID |
| DELETE | `/api/banners/{id}` | Delete banner by ID |

**POST /api/banners Request Body:**
  → Model: Banner
  → Fields:
      - id : String
      - title : String
      - description : String
      - imageId : String
      - targetUrl : String
      - displayOrder : int
      - active : boolean
      - type : String
      - startDate : LocalDateTime
      - endDate : LocalDateTime
      - clickCount : int
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime

---

## BlogController
**Base Path:** `/api/blogs`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs` | Get all blogs |
| POST | `/api/blogs` | Create a new blog |
| GET | `/api/blogs/{id}` | Get blog by ID |
| PUT | `/api/blogs/{id}` | Update blog by ID |
| DELETE | `/api/blogs/{id}` | Delete blog by ID |
| GET | `/api/blogs/search` | Search blogs |

**POST /api/blogs Request Body:**
  → Model: Blog
  → Fields:
      - id : String
      - title : String
      - slug : String
      - excerpt : String
      - content : String
      - featuredImage : String
      - authorId : String
      - category : String
      - tags : List<String>
      - seoTitle : String
      - seoDescription : String
      - seoKeywords : String
      - publishedAt : LocalDateTime
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime

---

## BrandController
**Base Path:** `/api/brands`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/brands` | Get all brands |
| GET | `/api/brands/{id}` | Get brand by ID |
| GET | `/api/brands/{id}/products` | Get products by brand |
| POST | `/api/brands` | Create a new brand |
| PUT | `/api/brands/{id}` | Update brand by ID |
| DELETE | `/api/brands/{id}` | Delete brand by ID |
| POST | `/api/brands/{id}/logo` | Upload logo for brand |

**POST /api/brands Request Body:**
  → Model: Brand
  → Fields:
      - id : String
      - name : String
      - slug : String
      - description : String
      - logoImageId : String
      - websiteUrl : String
      - createdAt : LocalDateTime

---

## CartController
**Base Path:** `/api/carts`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/carts` | Get all carts |
| GET | `/api/carts/{id}` | Get cart by ID |
| GET | `/api/carts/user/{userId}` | Get cart by user ID |
| POST | `/api/carts/user/{userId}/add` | Add item to cart |
| PUT | `/api/carts/user/{userId}/update` | Update cart for user |
| DELETE | `/api/carts/user/{userId}/remove/{variantId}` | Remove item from cart |
| DELETE | `/api/carts/user/{userId}/clear` | Clear cart for user |
| POST | `/api/carts` | Create a new cart |
| PUT | `/api/carts/{id}` | Update cart by ID |
| DELETE | `/api/carts/{id}` | Delete cart by ID |

**POST /api/carts Request Body:**
  → Model: Cart
  → Fields:
      - id : String
      - userId : String
      - items : List<CartItem>
      - total : double

---

## CartItemController
**Base Path:** `/api/cart-items`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart-items` | Get all cart items |
| GET | `/api/cart-items/{id}` | Get cart item by ID |
| GET | `/api/cart-items/variant/{variantId}` | Get cart item by variant ID |
| POST | `/api/cart-items` | Create a new cart item |
| PUT | `/api/cart-items/{id}` | Update cart item by ID |
| DELETE | `/api/cart-items/{id}` | Delete cart item by ID |

**POST /api/cart-items Request Body:**
  → Model: CartItem
  → Fields:
      - id : String
      - variantId : String
      - quantity : int
      - price : double

---

## CategoryController
**Base Path:** `/api/categories`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/nested` | Get nested categories |
| POST | `/api/categories` | Create a new category |
| GET | `/api/categories/{id}` | Get category by ID |
| PUT | `/api/categories/{id}` | Update category by ID |
| DELETE | `/api/categories/{id}` | Delete category by ID |
| GET | `/api/categories/name/{name}` | Get category by name |

**POST /api/categories Request Body:**
  → Model: Category
  → Fields:
      - id : String
      - name : String
      - slug : String
      - description : String
      - imageId : String
      - sortOrder : int
      - active : boolean
      - parentId : String
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime
      - children : List<Category>
---

## ColorController
**Base Path:** `/api/colors`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/colors` | Get all colors |
| GET | `/api/colors/active` | Get active colors |
| GET | `/api/colors/{id}` | Get color by ID |
| POST | `/api/colors` | Create a new color |
| PUT | `/api/colors/{id}` | Update color by ID |
| DELETE | `/api/colors/{id}` | Delete color by ID |

**POST /api/colors Request Body:**
  → Model: Color
  → Fields:
      - id : String
      - name : String
      - hexCode : String

---

## CouponController
**Base Path:** `/api/coupons`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/coupons` | Get all coupons |
| GET | `/api/coupons/{id}` | Get coupon by ID |
| GET | `/api/coupons/code/{code}` | Get coupon by code |
| GET | `/api/coupons/active` | Get active coupons |
| POST | `/api/coupons` | Create a new coupon |
| PUT | `/api/coupons/{id}` | Update coupon by ID |
| DELETE | `/api/coupons/{id}` | Delete coupon by ID |
| GET | `/api/coupons/validate/{code}` | Validate coupon code |

**POST /api/coupons Request Body:**
  → Model: Coupon
  → Fields:
      - id : String
      - code : String
      - name : String
      - description : String
      - type : String
      - value : double
      - minOrderValue : double
      - maxDiscount : double
      - usageLimit : int
      - startDate : LocalDateTime
      - endDate : LocalDateTime
      - createdAt : LocalDateTime

---

## EmailTemplateController
**Base Path:** `/api/email-templates`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/email-templates` | Get all email templates |
| GET | `/api/email-templates/{id}` | Get email template by ID |
| GET | `/api/email-templates/name/{name}` | Get email template by name |
| GET | `/api/email-templates/active` | Get active email templates |
| POST | `/api/email-templates` | Create a new email template |
| PUT | `/api/email-templates/{id}` | Update email template by ID |
| DELETE | `/api/email-templates/{id}` | Delete email template by ID |

**POST /api/email-templates Request Body:**
  → Model: EmailTemplate
  → Fields:
      - id : String
      - templateKey : String
      - name : String
      - subject : String
      - htmlContent : String
      - textContent : String
      - variables : String
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime

---

## ImageController
**Base Path:** `/api/images`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/images` | Get all images |
| POST | `/api/images` | Create a new image |
| POST | `/api/images/upload` | Upload an image |
| GET | `/api/images/{id}` | Get image by ID |
| GET | `/api/images/entity/{entityId}` | Get images by entity ID |
| GET | `/api/images/type/{type}` | Get images by type |
| GET | `/api/images/entity/{entityId}/type/{type}` | Get images by entity ID and type |
| PUT | `/api/images/{id}` | Update image by ID |
| DELETE | `/api/images/{id}` | Delete image by ID |
| DELETE | `/api/images/entity/{entityId}` | Delete images by entity ID |
| DELETE | `/api/images/entity/{entityId}/type/{type}` | Delete images by entity ID and type |

**POST /api/images Request Body:**
  → Model: Image
  → Fields:
      - id : String
      - url : String
      - type : String
      - entityId : String
      - variantId : String
      - altText : String
      - publicId : String
      - createdAt : LocalDateTime

---

## InventoryTransactionController
**Base Path:** `/api/inventory-transactions`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/inventory-transactions` | Get all inventory transactions |
| GET | `/api/inventory-transactions/{id}` | Get inventory transaction by ID |
| GET | `/api/inventory-transactions/product/{productId}` | Get transactions by product ID |
| GET | `/api/inventory-transactions/product/{productId}/ordered` | Get ordered transactions by product ID |
| POST | `/api/inventory-transactions` | Create a new inventory transaction |
| PUT | `/api/inventory-transactions/{id}` | Update inventory transaction by ID |
| DELETE | `/api/inventory-transactions/{id}` | Delete inventory transaction by ID |

**POST /api/inventory-transactions Request Body:**
  → Model: InventoryTransaction
  → Fields:
      - id : String
      - productId : String
      - variantId : String
      - transactionType : String
      - quantity : int
      - reason : String
      - referenceType : String
      - referenceId : String
      - performedBy : String
      - notes : String
      - createdAt : LocalDateTime

---

## MaterialController
**Base Path:** `/api/materials`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/materials` | Get all materials |
| GET | `/api/materials/active` | Get active materials |
| GET | `/api/materials/{id}` | Get material by ID |
| POST | `/api/materials` | Create a new material |
| PUT | `/api/materials/{id}` | Update material by ID |
| DELETE | `/api/materials/{id}` | Delete material by ID |

**POST /api/materials Request Body:**
  → Model: Material
  → Fields:
      - id : String
      - name : String
      - description : String

---

## OrderController
**Base Path:** `/api/orders`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Get all orders |
| POST | `/api/orders` | Create a new order |
| GET | `/api/orders/{id}` | Get order by ID |
| PUT | `/api/orders/{id}` | Update order by ID |
| DELETE | `/api/orders/{id}` | Delete order by ID |
| GET | `/api/orders/user/{userId}` | Get orders by user ID |
| GET | `/api/orders/product/{productId}` | Get orders by product ID |

**POST /api/orders Request Body:**
  → Model: Order
  → Fields:
      - id : String
      - orderNumber : String
      - userId : String
      - guestEmail : String
      - guestName : String
      - paymentMethod : String
      - paymentId : String
      - shippingAddressId : String
      - billingAddressId : String
      - subtotal : double
      - total : double
      - notes : String
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime
      - productId : String
      - quantity : int

---

## OrderCouponController
**Base Path:** `/api/order-coupons`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/order-coupons` | Get all order coupons |
| GET | `/api/order-coupons/{id}` | Get order coupon by ID |
| GET | `/api/order-coupons/order/{orderId}` | Get order coupons by order ID |
| GET | `/api/order-coupons/coupon/{couponId}` | Get order coupons by coupon ID |
| POST | `/api/order-coupons` | Create a new order coupon |
| PUT | `/api/order-coupons/{id}` | Update order coupon by ID |
| DELETE | `/api/order-coupons/{id}` | Delete order coupon by ID |

**POST /api/order-coupons Request Body:**
  → Model: OrderCoupon
  → Fields:
      - id : String
      - orderId : String
      - couponId : String
      - discountAmount : double

---

## OrderItemController
**Base Path:** `/api/order-items`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/order-items` | Get all order items |
| GET | `/api/order-items/{id}` | Get order item by ID |
| GET | `/api/order-items/order/{orderId}` | Get order items by order ID |
| GET | `/api/order-items/product/{productId}` | Get order items by product ID |
| POST | `/api/order-items` | Create a new order item |
| PUT | `/api/order-items/{id}` | Update order item by ID |
| DELETE | `/api/order-items/{id}` | Delete order item by ID |

**POST /api/order-items Request Body:**
  → Model: OrderItem
  → Fields:
      - id : String
      - orderId : String
      - productId : String
      - variantId : String
      - productName : String
      - variantName : String
      - quantity : int
      - unitPrice : double
      - totalPrice : double
      - sku : String
      - createdAt : LocalDateTime

---

## OrderStatusHistoryController
**Base Path:** `/api/order-status-histories`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/order-status-histories` | Get all order status histories |
| GET | `/api/order-status-histories/{id}` | Get order status history by ID |
| GET | `/api/order-status-histories/order/{orderId}` | Get status histories by order ID |
| POST | `/api/order-status-histories` | Create a new order status history |
| PUT | `/api/order-status-histories/{id}` | Update order status history by ID |
| DELETE | `/api/order-status-histories/{id}` | Delete order status history by ID |

**POST /api/order-status-histories Request Body:**
  → Model: OrderStatusHistory
  → Fields:
      - id : String
      - orderId : String
      - oldStatus : String
      - newStatus : String
      - changedBy : String
      - notes : String
      - createdAt : LocalDateTime

---

## PageController
**Base Path:** `/api/pages`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pages` | Get all pages |
| GET | `/api/pages/{id}` | Get page by ID |
| GET | `/api/pages/slug/{slug}` | Get page by slug |
| GET | `/api/pages/published/{isPublished}` | Get pages by published status |
| POST | `/api/pages` | Create a new page |
| PUT | `/api/pages/{id}` | Update page by ID |
| DELETE | `/api/pages/{id}` | Delete page by ID |

**POST /api/pages Request Body:**
  → Model: Page
  → Fields:
      - id : String
      - title : String
      - slug : String
      - content : String
      - seoTitle : String
      - seoDescription : String
      - seoKeywords : String
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime

---

## ProductAttributeController
**Base Path:** `/api/product-attributes`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/product-attributes` | Get all product attributes |
| GET | `/api/product-attributes/{id}` | Get product attribute by ID |
| GET | `/api/product-attributes/product/{productId}` | Get attributes by product ID |
| POST | `/api/product-attributes` | Create a new product attribute |
| PUT | `/api/product-attributes/{id}` | Update product attribute by ID |
| DELETE | `/api/product-attributes/{id}` | Delete product attribute by ID |

**POST /api/product-attributes Request Body:**
  → Model: ProductAttribute
  → Fields:
      - id : String
      - productId : String
      - attributeName : String
      - attributeValue : String

---

## ProductController
**Base Path:** `/api/products`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products/{id}/with-images` | Get product with images by ID |
| GET | `/api/products/{id}/images` | Get product images by ID |
| GET | `/api/products` | Get all products |
| GET | `/api/products/with-images` | Get all products with images |
| POST | `/api/products` | Create a new product |
| GET | `/api/products/{id}` | Get product by ID |
| PUT | `/api/products/{id}` | Update product by ID |
| DELETE | `/api/products/{id}` | Delete product by ID |
| GET | `/api/products/category/{categoryId}` | Get products by category |
| GET | `/api/products/search` | Search products |
| GET | `/api/products/price-range` | Get products by price range |
| GET | `/api/products/{id}/with-reviews` | Get product with reviews by ID |
| GET | `/api/products/{id}/reviews` | Get product reviews by ID |

**GET /api/products/{id}/with-images Response Body:**
  → Model: ProductWithImagesDTO
  → Fields:
      - id : String
      - name : String
      - slug : String
      - sku : String
      - description : String
      - shortDescription : String
      - brandId : String
      - categoryId : String
      - basePrice : double
      - salePrice : Double
      - costPrice : Double
      - weight : Double
      - dimensions : String
      - taxClass : String
      - seoTitle : String
      - seoDescription : String
      - seoKeywords : String
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime
      - createdBy : String
      - updatedBy : String
      - price : double
      - sizeIds : List<String>
      - colorIds : List<String>
      - materialIds : List<String>
      - variantIds : List<String>
      - gender : String
      - tagIds : List<String>
      - discountPrice : double
      - onSale : boolean
      - popularity : int
      - averageRating : double
      - images : List<ImageDTO>
        - id : String
        - url : String
        - altText : String
        - displayOrder : int
        - publicId : String

**GET /api/products/with-images Response Body:**
  → Model: List<ProductWithImagesDTO>
  → Each item contains the same fields as above for ProductWithImagesDTO

**POST /api/products Request Body:**
  → Model: Product
  → Fields:
      - id : String
      - name : String
      - slug : String
      - sku : String
      - description : String
      - shortDescription : String
      - brandId : String
      - categoryId : String
      - basePrice : double
      - salePrice : Double
      - costPrice : Double
      - weight : Double
      - dimensions : String
      - taxClass : String
      - seoTitle : String
      - seoDescription : String
      - seoKeywords : String
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime
      - createdBy : String
      - updatedBy : String
      - price : double
      - sizeIds : List<String>
      - colorIds : List<String>
      - materialIds : List<String>
      - variantIds : List<String>
      - gender : String
      - tagIds : List<String>
      - discountPrice : double
      - onSale : boolean
      - popularity : int
      - averageRating : double

---

## ProductFilterController
**Base Path:** `/api/products/filter`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products/filter/gender/{gender}` | Filter products by gender |
| GET | `/api/products/filter/sale` | Get products on sale |
| GET | `/api/products/filter/size/{size}` | Filter products by size |
| GET | `/api/products/filter/color/{color}` | Filter products by color |
| GET | `/api/products/filter/material/{material}` | Filter products by material |
| GET | `/api/products/filter/tag/{tag}` | Filter products by tag |
| GET | `/api/products/filter/popular` | Get popular products |
| GET | `/api/products/filter/advanced` | Advanced product filtering |

---

## ProductTagController
**Base Path:** `/api/product-tags`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/product-tags` | Get all product tags |
| GET | `/api/product-tags/{id}` | Get product tag by ID |
| GET | `/api/product-tags/product/{productId}` | Get tags by product ID |
| GET | `/api/product-tags/tag/{tagId}` | Get product tags by tag ID |
| POST | `/api/product-tags` | Create a new product tag |
| PUT | `/api/product-tags/{id}` | Update product tag by ID |
| DELETE | `/api/product-tags/{id}` | Delete product tag by ID |

**POST /api/product-tags Request Body:**
  → Model: ProductTag
  → Fields:
      - id : String
      - productId : String
      - tagId : String

---

## ProductVariantController
**Base Path:** `/api/product-variants`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/product-variants` | Get all product variants |
| POST | `/api/product-variants` | Create a new product variant |
| GET | `/api/product-variants/{id}` | Get product variant by ID |
| PUT | `/api/product-variants/{id}` | Update product variant by ID |
| DELETE | `/api/product-variants/{id}` | Delete product variant by ID |
| GET | `/api/product-variants/product/{productId}` | Get variants by product ID |

**POST /api/product-variants Request Body:**
  → Model: ProductVariant
  → Fields:
      - id : String
      - productId : String
      - sizeId : String
      - colorId : String
      - materialId : String
      - imageUrl : String
      - sku : String
      - createdAt : LocalDateTime
      - priceAdjustment : double

---

## ProductViewController
**Base Path:** `/api/product-views`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/product-views` | Get all product views |
| GET | `/api/product-views/{id}` | Get product view by ID |
| GET | `/api/product-views/product/{productId}` | Get views by product ID |
| GET | `/api/product-views/user/{userId}` | Get views by user ID |
| POST | `/api/product-views` | Create a new product view |
| PUT | `/api/product-views/{id}` | Update product view by ID |
| DELETE | `/api/product-views/{id}` | Delete product view by ID |

**POST /api/product-views Request Body:**
  → Model: ProductView
  → Fields:
      - id : String
      - productId : String
      - userId : String
      - sessionId : String
      - ipAddress : String
      - userAgent : String
      - referrerUrl : String
      - viewedAt : LocalDateTime

---

## ReviewController
**Base Path:** `/api/reviews`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reviews` | Get all reviews |
| POST | `/api/reviews` | Create a new review |
| GET | `/api/reviews/{id}` | Get review by ID |
| PUT | `/api/reviews/{id}` | Update review by ID |
| DELETE | `/api/reviews/{id}` | Delete review by ID |
| GET | `/api/reviews/product/{productId}` | Get reviews by product ID |
| GET | `/api/reviews/user/{userId}` | Get reviews by user ID |

**POST /api/reviews Request Body:**
  → Model: Review
  → Fields:
      - id : String
      - productId : String
      - userId : String
      - orderId : String
      - title : String
      - rating : int
      - comment : String
      - moderatedBy : String
      - moderatedAt : LocalDateTime
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime
      - verified : boolean

---

## ReviewHelpfulVoteController
**Base Path:** `/api/review-helpful-votes`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/review-helpful-votes` | Get all review helpful votes |
| GET | `/api/review-helpful-votes/{id}` | Get review helpful vote by ID |
| GET | `/api/review-helpful-votes/review/{reviewId}` | Get votes by review ID |
| POST | `/api/review-helpful-votes` | Create a new review helpful vote |
| PUT | `/api/review-helpful-votes/{id}` | Update review helpful vote by ID |
| DELETE | `/api/review-helpful-votes/{id}` | Delete review helpful vote by ID |

**POST /api/review-helpful-votes Request Body:**
  → Model: ReviewHelpfulVote
  → Fields:
      - id : String
      - reviewId : String
      - userId : String
      - voteType : String
      - createdAt : LocalDateTime

---

## ReviewImageController
**Base Path:** `/api/review-images`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/review-images` | Get all review images |
| GET | `/api/review-images/{id}` | Get review image by ID |
| GET | `/api/review-images/review/{reviewId}` | Get images by review ID |
| POST | `/api/review-images` | Create a new review image |
| PUT | `/api/review-images/{id}` | Update review image by ID |
| DELETE | `/api/review-images/{id}` | Delete review image by ID |

**POST /api/review-images Request Body:**
  → Model: ReviewImage
  → Fields:
      - id : String
      - reviewId : String
      - imageUrl : String
      - createdAt : LocalDateTime

---

## ReviewResponseController
**Base Path:** `/api/review-responses`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/review-responses` | Get all review responses |
| GET | `/api/review-responses/{id}` | Get review response by ID |
| GET | `/api/review-responses/review/{reviewId}` | Get responses by review ID |
| POST | `/api/review-responses` | Create a new review response |
| PUT | `/api/review-responses/{id}` | Update review response by ID |
| DELETE | `/api/review-responses/{id}` | Delete review response by ID |

**POST /api/review-responses Request Body:**
  → Model: ReviewResponse
  → Fields:
      - id : String
      - reviewId : String
      - userId : String
      - responseText : String
      - createdAt : LocalDateTime

---

## RoleController
**Base Path:** `/api/roles`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/roles` | Get all roles |
| GET | `/api/roles/{id}` | Get role by ID |
| GET | `/api/roles/name/{name}` | Get role by name |
| POST | `/api/roles` | Create a new role |
| PUT | `/api/roles/{id}` | Update role by ID |
| DELETE | `/api/roles/{id}` | Delete role by ID |

**POST /api/roles Request Body:**
  → Model: Role
  → Fields:
      - id : String
      - name : String
      - description : String
      - createdAt : LocalDateTime

---

## ScheduledTaskController
**Base Path:** `/api/scheduled-tasks`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/scheduled-tasks` | Get all scheduled tasks |
| GET | `/api/scheduled-tasks/{id}` | Get scheduled task by ID |
| GET | `/api/scheduled-tasks/name/{name}` | Get scheduled task by name |
| GET | `/api/scheduled-tasks/active` | Get active scheduled tasks |
| POST | `/api/scheduled-tasks` | Create a new scheduled task |
| PUT | `/api/scheduled-tasks/{id}` | Update scheduled task by ID |
| DELETE | `/api/scheduled-tasks/{id}` | Delete scheduled task by ID |

**POST /api/scheduled-tasks Request Body:**
  → Model: ScheduledTask
  → Fields:
      - id : String
      - taskName : String
      - taskType : String
      - scheduleExpression : String
      - parameters : String
      - lastRunAt : LocalDateTime
      - nextRunAt : LocalDateTime
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime

---

## SearchQueryController
**Base Path:** `/api/search-queries`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/search-queries` | Get all search queries |
| GET | `/api/search-queries/{id}` | Get search query by ID |
| GET | `/api/search-queries/user/{userId}` | Get queries by user ID |
| GET | `/api/search-queries/query/{query}` | Get queries by query string |
| POST | `/api/search-queries` | Create a new search query |
| PUT | `/api/search-queries/{id}` | Update search query by ID |
| DELETE | `/api/search-queries/{id}` | Delete search query by ID |

**POST /api/search-queries Request Body:**
  → Model: SearchQuery
  → Fields:
      - id : String
      - query : String
      - userId : String
      - sessionId : String
      - ipAddress : String
      - searchedAt : LocalDateTime

---

## SizeController
**Base Path:** `/api/sizes`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/sizes` | Get all sizes |
| GET | `/api/sizes/active` | Get active sizes |
| GET | `/api/sizes/category/{category}` | Get sizes by category |
| GET | `/api/sizes/{id}` | Get size by ID |
| POST | `/api/sizes` | Create a new size |
| PUT | `/api/sizes/{id}` | Update size by ID |
| DELETE | `/api/sizes/{id}` | Delete size by ID |

**POST /api/sizes Request Body:**
  → Model: Size
  → Fields:
      - id : String
      - name : String
      - category : String
      - description : String

---

## StockAlertController
**Base Path:** `/api/stock-alerts`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/stock-alerts` | Get all stock alerts |
| GET | `/api/stock-alerts/{id}` | Get stock alert by ID |
| GET | `/api/stock-alerts/product/{productId}` | Get alerts by product ID |
| GET | `/api/stock-alerts/resolved/{isResolved}` | Get alerts by resolved status |
| POST | `/api/stock-alerts` | Create a new stock alert |
| PUT | `/api/stock-alerts/{id}` | Update stock alert by ID |
| DELETE | `/api/stock-alerts/{id}` | Delete stock alert by ID |

**POST /api/stock-alerts Request Body:**
  → Model: StockAlert
  → Fields:
      - id : String
      - productId : String
      - variantId : String
      - alertType : String
      - thresholdQuantity : int
      - currentQuantity : int
      - resolvedAt : LocalDateTime
      - resolvedBy : String
      - createdAt : LocalDateTime

---

## SystemSettingController
**Base Path:** `/api/system-settings`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/system-settings` | Get all system settings |
| GET | `/api/system-settings/{id}` | Get system setting by ID |
| GET | `/api/system-settings/key/{key}` | Get system setting by key |
| GET | `/api/system-settings/active` | Get active system settings |
| POST | `/api/system-settings` | Create a new system setting |
| PUT | `/api/system-settings/{id}` | Update system setting by ID |
| DELETE | `/api/system-settings/{id}` | Delete system setting by ID |

**POST /api/system-settings Request Body:**
  → Model: SystemSetting
  → Fields:
      - id : String
      - settingKey : String
      - settingValue : String
      - settingType : String
      - description : String
      - updatedAt : LocalDateTime
      - updatedBy : String

---

## TagController
**Base Path:** `/api/tags`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tags` | Get all tags |
| GET | `/api/tags/active` | Get active tags |
| GET | `/api/tags/{id}` | Get tag by ID |
| POST | `/api/tags` | Create a new tag |
| PUT | `/api/tags/{id}` | Update tag by ID |
| DELETE | `/api/tags/{id}` | Delete tag by ID |

**POST /api/tags Request Body:**
  → Model: Tag
  → Fields:
      - id : String
      - name : String
      - slug : String
      - type : String
      - color : String
      - createdAt : LocalDateTime

---

## UserAddressController
**Base Path:** `/api/user-addresses`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user-addresses` | Get all user addresses |
| GET | `/api/user-addresses/{id}` | Get user address by ID |
| GET | `/api/user-addresses/user/{userId}` | Get addresses by user ID |
| GET | `/api/user-addresses/user/{userId}/default` | Get default address by user ID |
| POST | `/api/user-addresses` | Create a new user address |
| PUT | `/api/user-addresses/{id}` | Update user address by ID |
| DELETE | `/api/user-addresses/{id}` | Delete user address by ID |

**POST /api/user-addresses Request Body:**
  → Model: UserAddress
  → Fields:
      - id : String
      - userId : String
      - addressType : String
      - recipientName : String
      - phone : String
      - city  :  string
      - province : String
      - district : String
      - ward : String
      - streetAddress : String
      - postalCode : String
      - createdAt : LocalDateTime

---

## UserController
**Base Path:** `/api/users`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create a new user |
| GET | `/api/users/{id}` | Get user by ID |
| PUT | `/api/users/{id}` | Update user by ID |
| DELETE | `/api/users/{id}` | Delete user by ID |
| GET | `/api/users/username/{username}` | Get user by username |
| POST | `/api/users/{id}/avatar` | Upload avatar for user |

**POST /api/users Request Body:**
  → Model: User
  → Fields:
      - id : String
      - email : String
      - passwordHash : String
      - firstName : String
      - lastName : String
      - phone : String
      - dateOfBirth : LocalDate
      - gender : String
      - avatarImageId : String
      - createdAt : LocalDateTime
      - updatedAt : LocalDateTime
      - lastLoginAt : LocalDateTime
      - username : String

      

---

## UserRoleController
**Base Path:** `/api/user-roles`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user-roles` | Get all user roles |
| GET | `/api/user-roles/{id}` | Get user role by ID |
| GET | `/api/user-roles/user/{userId}` | Get roles by user ID |
| GET | `/api/user-roles/role/{roleId}` | Get user roles by role ID |
| POST | `/api/user-roles` | Create a new user role |
| PUT | `/api/user-roles/{id}` | Update user role by ID |
| DELETE | `/api/user-roles/{id}` | Delete user role by ID |

**POST /api/user-roles Request Body:**
  → Model: UserRole
  → Fields:
      - id : String
      - userId : String
      - roleId : String
      - assignedAt : LocalDateTime
      - assignedBy : String

---

## WishlistController
**Base Path:** `/api/wishlists`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/wishlists` | Get all wishlists |
| GET | `/api/wishlists/{id}` | Get wishlist by ID |
| GET | `/api/wishlists/user/{userId}` | Get wishlist by user ID |
| GET | `/api/wishlists/product/{productId}` | Get wishlists by product ID |
| POST | `/api/wishlists/user/{userId}/add` | Add product to wishlist |
| DELETE | `/api/wishlists/user/{userId}/remove/{productId}` | Remove product from wishlist |
| GET | `/api/wishlists/user/{userId}/check/{productId}` | Check if product is in wishlist |
| GET | `/api/wishlists/user/{userId}/count` | Get wishlist count for user |
| POST | `/api/wishlists` | Create a new wishlist |
| PUT | `/api/wishlists/{id}` | Update wishlist by ID |
| DELETE | `/api/wishlists/{id}` | Delete wishlist by ID |

**POST /api/wishlists Request Body:**
  → Model: Wishlist
  → Fields:
      - id : String
      - userId : String
      - productId : String
      - productName : String
      - productPrice : double
      - productImage : String
      - addedAt : LocalDateTime

