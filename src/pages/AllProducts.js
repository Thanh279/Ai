import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductFilter from '../components/ProductFilter';
import ProductCard from '../components/ProductCard';
import CartContext from '../context/CartContext';
import useProductFilter from '../hooks/useProductFilter';
import '../styles/Home.css';

const AllProducts = () => {
    const { products, loading, error, filters, updateFilters, clearFilters, metadata } = useProductFilter();
    const { addToCart } = useContext(CartContext);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // Calculate pagination
    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filters]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="container mx-auto py-8 flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto mb-4"></div>
                        <p className="text-orange-600">Loading products...</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="container mx-auto py-8 flex-1 flex items-center justify-center">
                    <div className="text-center text-red-600">
                        <p>Error: {error}</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <motion.div
            className="min-h-screen flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Header />

            {/* Page Title */}
            <motion.div
                className="bg-gray-50 py-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-900">Tất Cả Sản Phẩm</h1>
                    <p className="text-gray-600 mt-2">Khám phá bộ sưu tập đầy đủ của chúng tôi</p>
                </div>
            </motion.div>

            {/* Filters */}
            <ProductFilter
                filters={filters}
                updateFilters={updateFilters}
                clearFilters={clearFilters}
                metadata={metadata}
            />

            {/* Products Grid */}
            <main className="container mx-auto px-4 py-8 flex-1">
                {currentProducts.length > 0 ? (
                    <>
                        {/* Results count */}
                        <div className="mb-6">
                            <p className="text-gray-600">
                                Hiển thị {startIndex + 1}-{Math.min(endIndex, products.length)} của {products.length} sản phẩm
                            </p>
                        </div>

                        {/* Products grid */}
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            {currentProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <ProductCard product={product} addToCart={addToCart} />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-12 flex justify-center">
                                <div className="flex space-x-2">
                                    {/* Previous button */}
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        ‹ Trước
                                    </button>

                                    {/* Page numbers */}
                                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                                        .filter(page => {
                                            // Show first page, last page, current page, and pages around current
                                            return page === 1 ||
                                                page === totalPages ||
                                                (page >= currentPage - 1 && page <= currentPage + 1);
                                        })
                                        .map((page, index, array) => (
                                            <React.Fragment key={page}>
                                                {index > 0 && array[index - 1] !== page - 1 && (
                                                    <span className="px-2 py-2 text-gray-500">...</span>
                                                )}
                                                <button
                                                    onClick={() => handlePageChange(page)}
                                                    className={`px-4 py-2 border rounded-lg ${currentPage === page
                                                            ? 'bg-orange-600 text-white border-orange-600'
                                                            : 'border-gray-300 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {page}
                                                </button>
                                            </React.Fragment>
                                        ))}

                                    {/* Next button */}
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Sau ›
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-gray-400 text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Không tìm thấy sản phẩm</h3>
                        <p className="text-gray-600 mb-4">Thử thay đổi bộ lọc hoặc tìm kiếm khác</p>
                        <button
                            onClick={clearFilters}
                            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                        >
                            Xóa bộ lọc
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </motion.div>
    );
};

export default AllProducts;
