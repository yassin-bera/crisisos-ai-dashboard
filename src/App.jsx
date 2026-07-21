import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"

import Dashboard from "./pages/Dashboard"
import AICommandCenter from "./pages/AICommandCenter"
import Resources from "./pages/Resources"
import Requests from "./pages/Requests"
import Volunteers from "./pages/Volunteers"
import Analytics from "./pages/Analytics"
import Reports from "./pages/Reports"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />

          <Route 
            path="ai-command-center" 
            element={<AICommandCenter />} 
          />

          <Route 
            path="resources" 
            element={<Resources />} 
          />

          <Route 
            path="requests" 
            element={<Requests />} 
          />

          <Route 
            path="volunteers" 
            element={<Volunteers />} 
          />

          <Route 
            path="analytics" 
            element={<Analytics />} 
          />

          <Route 
            path="reports" 
            element={<Reports />} 
          />

          <Route 
            path="*" 
            element={<NotFound />} 
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}


export default App