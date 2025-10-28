import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authApi } from './services/auth';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/Login';
import OrderHistory from './pages/OrderHistory';
import UserProfilePage from './pages/UserProfilePage';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import WishlistPage from './pages/WishlistPage';
import AuthContext from './context/AuthContext';
import CartContext from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import './styles/App.css';

const App = () => {
  const [user, setUser] = React.useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [cart, setCart] = React.useState({}); // Object with product id as key
  const addToCart = (product) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[product.id]) {
        newCart[product.id] = { ...newCart[product.id], quantity: newCart[product.id].quantity + 1 };
      } else {
        newCart[product.id] = { ...product, quantity: 1 };
      }
      return newCart;
    });
  };
  const removeFromCart = (id) => setCart((prev) => {
    const newCart = { ...prev };
    delete newCart[id];
    return newCart;
  });
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prev) => ({
        ...prev,
        [id]: { ...prev[id], quantity }
      }));
    }
  };

  // Initialize user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Giữ tương thích hashchange
  useEffect(() => {
    const handleHashChange = () => { };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Tích hợp Chat n8n
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://lunzai.app.n8n.cloud/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat',
        target: '#n8n-chat',
        branding: false,
        mode: 'window',
        chatInputKey: 'chatInput',
        loadPreviousSession: true,
        initialMessages: [
          'Xin chào! 👋',
          'Tôi tên là Thành. Tôi có thể hỗ trợ bạn viết content gì hôm nay?'
        ],
        i18n: {
          en: {
            title: 'Xin chào! 👋',
            subtitle: 'Bắt đầu trò chuyện. Chúng tôi luôn sẵn sàng trợ giúp bạn.',
            footer: '',
            getStarted: 'Cuộc trò chuyện mới',
            inputPlaceholder: 'Nhập câu hỏi của bạn..'
          }
        }
      });
    `;
    document.body.appendChild(script);
  }, []);



  const login = async (credentials) => {
    try {
      const data = await authApi.login(credentials);
      setUser(data.user);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
      setUser(null);
    } catch (error) {
      // Still clear user state even if API call fails
      setUser(null);
      throw error;
    }
  };

  const authValue = { user, setUser, login, logout };
  const cartValue = { cart, addToCart, removeFromCart, updateQuantity };

  return (
    <AuthContext.Provider value={authValue}>
      <CartContext.Provider value={cartValue}>
        <WishlistProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/user-profile" element={<UserProfilePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
              <div id="n8n-chat"></div>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </Router>
        </WishlistProvider>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
