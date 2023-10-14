
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import TestTokenComponent from './components/TestComponent';

function App() {

  return (
    <>
    
  
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/test-token" element={<TestTokenComponent />} />
      {/* <Route path="/otra-pagina" component={''} /> */}
      {/* Otras rutas aquí */}
      </Routes>
    </Router>
    </>
  )
}

export default App
