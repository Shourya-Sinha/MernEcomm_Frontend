import './App.css'
import Login from './Pages/auth/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './Pages/auth/Register';
import ResetPassword from './Pages/auth/ResetPassword';
import Home from './Pages/allPage/Home';
import Cart from './Pages/allPage/Cart';
import MyOrder from './Pages/allPage/MyOrder';
import CheckOutPage from './Pages/allPage/CheckOutPage';
import OrderSuccess from './Pages/allPage/OrderSuccess';
import AddProduct from './Pages/allPage/admin/AddProduct';
import NavHolder from './Pages/allPage/navabr/NavHolder';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<NavHolder />}>
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<h1>404 Page Not Found</h1>} /> */}
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-Password' element={<ResetPassword />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/myorder' element={<MyOrder />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path='/add-product' element={<AddProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
