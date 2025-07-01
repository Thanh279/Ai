import { useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  useEffect(() => {
    // Thêm link CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Thêm script JS
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://lechithanh.app.n8n.cloud/webhook/daae5d2b-6c4c-44e1-bb0f-4903dc2525eb/chat'
      });
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Tích hợp AI Viết Content</h1>
    </div>
  );
}

export default App;
