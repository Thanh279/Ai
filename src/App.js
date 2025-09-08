import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
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
  const [user, setUser] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  // Giữ tương thích hashchange
  useEffect(() => {
    const handleHashChange = () => {};
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

  // Gỡ maxlength và xử lý giới hạn ký tự cho n8n-chat
  useEffect(() => {
    const observer = new MutationObserver(() => {
      // Tìm tất cả input và textarea trong n8n-chat
      const inputs = document.querySelectorAll('#n8n-chat input, #n8n-chat textarea, n8n-chat input, n8n-chat textarea');
      inputs.forEach(input => {
        if (input.hasAttribute('maxlength')) {
          input.removeAttribute('maxlength');
        }
        // Đặt maxLength cao hơn nếu cần
        input.maxLength = 10000;

        // Đặc biệt xử lý cho textarea (để tránh ResizeObserver loop khi xuống dòng)
        if (input.tagName.toLowerCase() === 'textarea') {
          // Thêm style để tránh resize loop
          input.style.resize = 'none';
          input.style.overflow = 'auto';

          // Debounce resize events
          let resizeTimeout;
          const originalResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
              // Trigger resize observer manually if needed
              if (window.ResizeObserver) {
                const resizeObserver = new window.ResizeObserver(() => {});
                resizeObserver.observe(input);
                resizeObserver.disconnect();
              }
            }, 100);
          };

          // Override input event để debounce
          const originalOnInput = input.oninput;
          input.oninput = (e) => {
            originalResize();
            if (originalOnInput) originalOnInput.call(input, e);
          };

          // Override keydown để xử lý Enter key
          const originalOnKeyDown = input.onkeydown;
          input.onkeydown = (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              // Cho phép xuống dòng nhưng debounce resize
              setTimeout(originalResize, 0);
            }
            if (originalOnKeyDown) originalOnKeyDown.call(input, e);
          };
        }

        // Gỡ bỏ event listeners có thể gây lỗi bằng cách clone
        const newInput = input.cloneNode(true);
        // Copy các event listeners quan trọng
        if (input.oninput) newInput.oninput = input.oninput;
        if (input.onkeydown) newInput.onkeydown = input.onkeydown;
        if (input.onchange) newInput.onchange = input.onchange;
        input.parentNode.replaceChild(newInput, input);
      });

      // Tìm và xử lý các element có thể hiển thị lỗi
      const errorElements = document.querySelectorAll('#n8n-chat .error, #n8n-chat [class*="error"], #n8n-chat [data-error]');
      errorElements.forEach(el => {
        if (
          el.textContent.includes('ký tự') ||
          el.textContent.includes('character') ||
          el.textContent.includes('length') ||
          el.textContent.includes('limit')
        ) {
          el.style.display = 'none';
        }
      });
    });

    // Quan sát toàn bộ body để bắt các thay đổi
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['maxlength', 'style']
    });

    // Chạy ngay lập tức sau khi DOM sẵn sàng
    setTimeout(() => {
      // Chạy lại sau một thời gian để đảm bảo n8n-chat đã load
      setTimeout(() => observer.disconnect(), 2000);
    }, 100);

    return () => observer.disconnect();
  }, []);

  // Chặn hoàn toàn ResizeObserver loop warning và các lỗi liên quan
  useEffect(() => {
    // Override ResizeObserver để ngăn loop
    const OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class ResizeObserver extends OriginalResizeObserver {
      constructor(callback) {
        const wrappedCallback = (entries, observer) => {
          try {
            callback(entries, observer);
          } catch (error) {
            // Chặn lỗi ResizeObserver loop
            if (error && typeof error.message === 'string') {
              const message = error.message.toLowerCase();
              if (
                message.includes('resizeobserver loop completed with undelivered notifications') ||
                message.includes('loop completed') ||
                message.includes('undelivered notifications')
              ) {
                return; // bỏ qua lỗi này
              }
            }
            throw error; // ném lại lỗi khác
          }
        };
        super(wrappedCallback);
      }
    };

    // Chặn console errors và warnings
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    const suppressResizeObserverErrors = (...args) => {
      if (args.length && typeof args[0] === 'string') {
        const message = args[0].toLowerCase();
        if (
          message.includes('resizeobserver loop completed with undelivered notifications') ||
          message.includes('resizeobserver') ||
          message.includes('loop completed') ||
          message.includes('undelivered notifications')
        ) {
          return;
        }
      }
      originalConsoleError.apply(console, args);
    };

    const suppressResizeObserverWarnings = (...args) => {
      if (args.length && typeof args[0] === 'string') {
        const message = args[0].toLowerCase();
        if (
          message.includes('resizeobserver loop completed with undelivered notifications') ||
          message.includes('resizeobserver') ||
          message.includes('loop completed') ||
          message.includes('undelivered notifications')
        ) {
          return;
        }
      }
      originalConsoleWarn.apply(console, args);
    };

    console.error = suppressResizeObserverErrors;
    console.warn = suppressResizeObserverWarnings;

    // Chặn window.onerror
    const originalOnError = window.onerror;
    window.onerror = (message, source, lineno, colno, error) => {
      if (typeof message === 'string') {
        const msg = message.toLowerCase();
        if (
          msg.includes('resizeobserver loop completed with undelivered notifications') ||
          msg.includes('resizeobserver') ||
          msg.includes('loop completed') ||
          msg.includes('undelivered notifications')
        ) {
          return true;
        }
      }
      if (originalOnError) {
        return originalOnError(message, source, lineno, colno, error);
      }
      return false;
    };

    // Chặn unhandled promise rejections
    const originalOnUnhandledRejection = window.onunhandledrejection;
    window.onunhandledrejection = (event) => {
      if (event && event.reason && typeof event.reason.message === 'string') {
        const message = event.reason.message.toLowerCase();
        if (
          message.includes('resizeobserver loop completed with undelivered notifications') ||
          message.includes('resizeobserver') ||
          message.includes('loop completed') ||
          message.includes('undelivered notifications')
        ) {
          event.preventDefault();
          return;
        }
      }
      if (originalOnUnhandledRejection) {
        originalOnUnhandledRejection(event);
      }
    };

    return () => {
      window.ResizeObserver = OriginalResizeObserver;
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
      window.onerror = originalOnError;
      window.onunhandledrejection = originalOnUnhandledRejection;
    };
  }, []);

  const authValue = { user, setUser };
  const cartValue = { cart, addToCart, removeFromCart };

  return (
    <AuthContext.Provider value={authValue}>
      <CartContext.Provider value={cartValue}>
        <WishlistProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
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
            </div>
          </Router>
        </WishlistProvider>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
