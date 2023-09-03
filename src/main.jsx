// css imports
import './index.css'

// library inports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'

// component imports
import App from './App.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
        <Toaster />
    </BrowserRouter>
)
