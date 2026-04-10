import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/accounts/Profile';
import Orders from './pages/accounts/Orders';
import ChangePassword from './pages/accounts/ChangePassword';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import { Toaster } from 'react-hot-toast';
import RequireAdminAuth from './common/RequireAdminAuth';
import AdminGeust from './common/AdminGeust';
import CreateCategory from './pages/admin/category/CreateCategory';
import ShowCategory from './pages/admin/category/ShowCategory';
import EditCategory from './pages/admin/category/EditCategory';
import CreateSubCategory from './pages/admin/sub-category/CreateSubCategory';
import ShowSubCategory from './pages/admin/sub-category/ShowSubCategory';
import EditSubCtegory from './pages/admin/sub-category/EditSubCategory';
import CreateBrand from './pages/admin/brand/CreateBrand';
import ShowBrand from './pages/admin/brand/ShowBrand';
import EditBrand from './pages/admin/brand/EditBrand';
import CreateProduct from './pages/admin/product/CreateProduct';
import ShowProduct from './pages/admin/product/ShowProduct';
import EditPorduct from './pages/admin/product/EditPorduct';
import ShowOrder from './pages/admin/order/ShowOrder';
import EditOrder from './pages/admin/order/EditOrder';
import CreateOrder from './pages/admin/order/CreateOrder';
import RequireAuth from './common/RequireAuth';
import RequireGuestAuth from './common/RequireGuestAuth';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/shop/:id' element={<Shop/>} />
      <Route path='/product/:id' element={<Product/>} />
      {/* guest route */}
      <Route path='/login' element={<RequireGuestAuth><Login/></RequireGuestAuth>} />
      <Route path='/register' element={<RequireGuestAuth><Register/></RequireGuestAuth>} />
      
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />

      {/* protected route */}
      <Route path='/account/profile' element={<RequireAuth><Profile/></RequireAuth>} />
      <Route path='/account/orders' element={<RequireAuth><Orders/></RequireAuth>} />
      <Route path='/account/change-password' element={<RequireAuth><ChangePassword/></RequireAuth>} />

      {/* Admin Route */}
      <Route path='/admin/login' element={<AdminGeust><AdminLogin/></AdminGeust>} />
      <Route path='/admin/dashboard' element={<RequireAdminAuth><Dashboard/></RequireAdminAuth>} />
      <Route path='/admin/category/create' element={<RequireAdminAuth><CreateCategory/></RequireAdminAuth>} />
      <Route path='/admin/category' element={<RequireAdminAuth><ShowCategory /></RequireAdminAuth>} />
      <Route path='/admin/category/edit/:id' element={<RequireAdminAuth><EditCategory/></RequireAdminAuth>} />
      <Route path='/admin/subcategory/create' element={<RequireAdminAuth><CreateSubCategory/></RequireAdminAuth>} />
      <Route path='/admin/subcategory' element={<RequireAdminAuth><ShowSubCategory /></RequireAdminAuth>} />
      <Route path='/admin/subcategory/edit/:id' element={<RequireAdminAuth><EditSubCtegory/></RequireAdminAuth>} />
      <Route path='/admin/brand/create' element={<RequireAdminAuth><CreateBrand/></RequireAdminAuth>} />
      <Route path='/admin/brand' element={<RequireAdminAuth><ShowBrand /></RequireAdminAuth>} />
      <Route path='/admin/brand/edit/:id' element={<RequireAdminAuth><EditBrand/></RequireAdminAuth>} />
      <Route path='/admin/product/create' element={<RequireAdminAuth><CreateProduct/></RequireAdminAuth>} />
      <Route path='/admin/product' element={<RequireAdminAuth><ShowProduct /></RequireAdminAuth>} />
      <Route path='/admin/product/edit/:id' element={<RequireAdminAuth><EditPorduct/></RequireAdminAuth>} />
      <Route path='/admin/order/create' element={<RequireAdminAuth><CreateOrder/></RequireAdminAuth>} />
      <Route path='/admin/order' element={<RequireAdminAuth><ShowOrder /></RequireAdminAuth>} />
      <Route path='/admin/order/edit/:id' element={<RequireAdminAuth><EditOrder/></RequireAdminAuth>} />
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
