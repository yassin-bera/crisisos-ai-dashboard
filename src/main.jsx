import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import './index.css'

import { CrisisProvider } from "./context/CrisisContext.jsx"



createRoot(document.getElementById('root')).render(

  <StrictMode>

    <CrisisProvider>

      <App />

    </CrisisProvider>

  </StrictMode>

)