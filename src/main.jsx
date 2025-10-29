import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "App.css/jsx"
import App from './App.jsx'
import "lib/axios.js"
import "services/post.js"
import "components/ListPosts.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
