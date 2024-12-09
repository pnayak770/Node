import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AddBook } from './AddBook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddBook />
  </StrictMode>,
)
