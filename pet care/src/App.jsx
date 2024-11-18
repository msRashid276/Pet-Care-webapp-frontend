import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

import LayoutAdmin from "./components/admin/shared/Layout";
import LayoutShop from "./components/shop/shared/Layout";
import LayoutUser from "./components/user/shared/Layout";
import Login from "./pages/admin-shop-shared/Login";
import AddUser from "./pages/admin/AddUser";
import DashboardAdmin from "./pages/admin/Dashboard";
import UsersAdmin from "./pages/admin/Users";
import DashboardShop from "./pages/shop/Dashboard";
import PetsAdd from "./pages/shop/PetsAdd";
import ShopRegister from "./pages/shop/Register";
import RegisterShop from "./pages/shop/RegisterShop";
import ShopDetails from "./pages/shop/ShopDetails";
import SpeciesAdd from "./pages/shop/SpeciesAdd";
import Cart from "./pages/user/cart/Cart";
import Contact from "./pages/user/Contact";
import Home from "./pages/user/Home";
import LoginUser from "./pages/user/Login";
import PageNotFound from "./pages/user/PageNotFound";
import RegisterUser from "./pages/user/Register";
import ShopPetDetails from "./pages/user/ShopPetDetails";
import { AuthProvider } from "./providers/AuthProvider";
import PrivateRoutes from "./utils/PrivateRoutes";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

        {/* Redirect root to /user/login */}
        <Route path="/" element={<Navigate to="/user/login" replace />} />

          <Route path='/auth/login' element={<Login/>}/>

          <Route element={<PrivateRoutes allowedRoles={['ADMIN']}/>}>
                <Route path='/admin' element={<LayoutAdmin/>}>
                  <Route index element={<DashboardAdmin/>}/>
                  <Route path='users' element={<UsersAdmin/>}/>
                  <Route path='addUser' element={<AddUser/>}/>
                </Route>
              </Route>


          {/* Shop */}

          <Route path='/shop/register' element={<ShopRegister/>}/>
          <Route path='/shop/addShop' element={<RegisterShop/>}/>
              <Route path='/shop' element={<LayoutShop/>}>
                  <Route path='dashboard' element={<DashboardShop/>}/>
                  <Route path='details' element={<ShopDetails/>}/>
                  <Route path='add-species' element={<SpeciesAdd/>}/>
                  <Route path='add-pets' element={<PetsAdd/>}/>
              </Route>


          {/* User */}

          <Route path="/user" element={<LayoutUser />}>
            <Route path="register" element={<RegisterUser />} />
            <Route path="login" element={<LoginUser />} />
            <Route path="home" element={<Home />} />
            <Route path="shop-petdetails/:id" element={<ShopPetDetails/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Route>


          


        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
