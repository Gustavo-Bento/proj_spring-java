import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Icon from './components/NotificationButton/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Icon />
    <Icon />
  </React.StrictMode>,
)
