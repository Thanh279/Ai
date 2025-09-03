import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../styles/ModalAuthForm.css';

const ModalAuthForm = ({ setUser, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="column" id="main">
              {isRegister ? (
                <RegisterForm setUser={setUser} />
              ) : (
                <>
                  <LoginForm setUser={setUser} />
                  <div style={{ marginTop: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <span style={{ color: '#ffdab9' }}>Don't have an account?</span>
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={toggleForm}
                      style={{ marginTop: '0.5rem', padding: '0.25rem 0.5rem', fontSize: '0.9rem', display: 'inline-block', width: 'auto', color: '#fffffdff',rouded:'10px' }}
                    >
                      Register
                    </button>
                  </div>
                  <p style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#555' }}>
                    Or create a new account below.
                  </p>
                </>
              )}
            </div>
            
            <div>
              <svg width="67px" height="578px" viewBox="0 0 67 578" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z" fill="#F9BC35"></path>
                </g>
              </svg>
            </div>
            
            <div className="column" id="secondary">
              <div className="sec-content">
                <h2>{isRegister ? 'Welcome Back!' : 'Hello, Friend!'}</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={toggleForm}
                >
                  {isRegister ? 'Login' : 'Sign Up'}
                </button>
              </div>
            </div>
          </div>
          
          <button 
            type="button" 
            className="close" 
            onClick={onClose}
            style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', fontSize: '24px' }}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAuthForm;
