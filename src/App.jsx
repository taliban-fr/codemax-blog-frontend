import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateBlog from './pages/CreateBlog';

function App() {
  return (
    <BrowserRouter>
    {/*Navbar sits outside of Routes so it renders on every page*/}
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateBlog />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;