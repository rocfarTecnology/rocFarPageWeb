import React from 'react'
import ReactDOM from 'react-dom/client'
// Import our custom CSS
import "./scss/style.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './pages/Home'

// import components





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
