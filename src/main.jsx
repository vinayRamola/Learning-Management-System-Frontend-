// css imports
import './index.css'

// library inports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux';

// component imports
import App from './App.jsx'
import store from './Redux/store'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <Toaster />
        </BrowserRouter>
    </Provider>
)
