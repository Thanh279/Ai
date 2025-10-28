// import React from 'react';
// import { useWishlist } from '../context/WishlistContext';
// import ProductCard from '../components/ProductCard';
// import { useContext } from 'react';
// import CartContext from '../context/CartContext';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const WishlistPage = () => {
//   const { wishlist, removeFromWishlist } = useWishlist();
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     // Optionally remove from wishlist after adding to cart
//     // removeFromWishlist(product.id);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="container mx-auto py-8 flex-1">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold">Your Wishlist</h1>
//           <p className="text-gray-600">
//             {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist
//           </p>
//         </div>

//         {wishlist.length === 0 ? (
//           <div className="text-center py-12">
//             <svg
//               className="w-16 h-16 text-gray-300 mx-auto mb-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//               />
//             </svg>
//             <h2 className="text-xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h2>
//             <p className="text-gray-500">Start adding items you love!</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {wishlist.map((product) => (
//               <div key={product.id} className="relative">
//                 <ProductCard product={product} addToCart={handleAddToCart} />
//                 <button
//                   onClick={() => removeFromWishlist(product.id)}
//                   className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
//                   title="Remove from wishlist"
//                 >
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default WishlistPage;
