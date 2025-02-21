import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Banco from './screens/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banco />
  </StrictMode>,
)
