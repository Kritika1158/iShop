import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import  Store from './pages/Store'
import  Accessories from './pages/Accessories'
import Ipad from './pages/Ipad'
import Iphone from './pages/Iphone'
import MacBook from './pages/MacBook'
import Product from './pages/Product';
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Products from './components/Products'
const App = () => {
  return <div>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/iphone' element={<Iphone/>} />
        <Route path='/ipad' element={<Ipad/>} />
        <Route path='/MacBook' element={<MacBook/>} />
        <Route path='/Accessories' element={<Accessories/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
  </div>;
};

export default App;