import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import Home from './pages/home/index.jsx'
import Navbar from './components/navbar/index.jsx'
import Footer from './components/footer/index.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <Home />
    <Footer />
  </>
)