import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './sidebar/sidebar.jsx'
import Content from './content/content.jsx'
import Footer from './footer/footer.jsx'
import './style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="main">
    <Sidebar />
    <Content />
    <Footer />
    </div>
  </StrictMode>,
)
