import React from 'react';
import { Provider } from 'react-redux';
import { Navbar } from './Components/Navbar';
import { MainPage } from './Containers/MainPage';
import { ModalProvider } from './Components/Modal/ModalProvider';
import { configureStore } from '../state/store/index.js';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <div className='app-wrapper'>
          <div className='app-container'>
            <div className='main-container'>
              <div className='main-header'>
                <Navbar />
              </div>
              <div className='main-content-wrapper'>
                <div className='main-content-container'>
                  <MainPage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </Provider>
  );
}
