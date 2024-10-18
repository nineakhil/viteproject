import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NewPro from './NewPro.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <NewPro />
  </StrictMode>,
)
