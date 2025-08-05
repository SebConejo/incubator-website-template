import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage'
import Program from './pages/Program'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/program/:slug" element={<Program />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
