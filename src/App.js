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
        webhookUrl: 'https://lechithanh.app.n8n.cloud/webhook/daae5d2b-6c4c-44e1-bb0f-4903dc2525eb/chat',
        target : '#n8n-chat' , 
	mode : 'window' , 
	chatInputKey : 'chatInput' , 
	
	loadPreviousSession : true , 
        initialMessages : [ 
		'Xin chào! 👋' , 
		'Tôi tên là Thành. Tôi có thể hỗ trợ bạn viết content gì hôm nay?' 
	] , 
	i18n : { 
		en : { 
			title : 'Xin chào! 👋' , 
			subtitle : "Bắt đầu trò chuyện. Chúng tôi luôn sẵn sàng trợ giúp bạn." , 
			footer : '' , 
			getStarted : 'Cuộc trò chuyện mới' , 
			inputPlaceholder : 'Nhập câu hỏi của bạn..' , 
		} , 
	} , 
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
