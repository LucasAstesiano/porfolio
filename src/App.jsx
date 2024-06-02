import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import { Home } from './Pages/Home/Home'

function App() {


  return (
    <Router>
      <Header/>
      <Home/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
