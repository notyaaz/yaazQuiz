import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {decode} from 'html-entities';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
