import React from 'react'
import ReactDOM from 'react-dom/client'
// Import our custom CSS
import "./scss/style.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import components

import Navbar from './components/Navbar'
import Carrusel from './components/Carrusel'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <hr />
    <Carrusel/>
  </React.StrictMode>,
)
