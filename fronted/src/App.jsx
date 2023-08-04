import "../App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import ProtectedRoute from './layouts/ProtectedRoute'

import Login from './pages/login/Login'
import Registrar from './pages/Registrar'
import ForgetPassword from './pages/ForgetPassword'
import NewPassword from './pages/NewPassword'
import ConfirmAccount from './pages/ConfirmAccount'
import Proyects from './pages/Proyects'
import NewProduct from './pages/NewProduct'
import Home from "./pages/home/Home";

import { AuthProvider } from './context/AuthProvider'
import Product from "./pages/product/Product";
function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='registrar' element={<Registrar />} />
            <Route path='olvide-password' element={<ForgetPassword />} />
            <Route path='olvide-password/:token' element={<NewPassword />} />
            <Route path='confirmar/:id' element={<ConfirmAccount />} />
          </Route>

          <Route path='/home' element={<ProtectedRoute />}>
            <Route index element ={<Home />} /> 
          </Route>

          <Route path='/productos' element={<ProtectedRoute />}>
            <Route index element ={<Product />} /> 
            <Route path='crear-producto' element={<NewProduct />} />
          </Route>

          <Route path='/proveedores' element={<ProtectedRoute />}>
            <Route index element ={<Proyects />} /> 
            <Route path='crear-producto' element={<NewProduct />} />
          </Route>

          <Route path='/clientes' element={<ProtectedRoute />}>
            <Route index element ={<Proyects />} /> 
            <Route path='crear-producto' element={<NewProduct />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
