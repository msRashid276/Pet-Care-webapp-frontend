import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

import Login from "./pages/admin-shop-shared/Login";
import DashboardShop from "./pages/shop/Dashboard";
import DashboardAdmin from "./pages/admin/Dashboard";
import LayoutAdmin from "./components/admin/shared/Layout";
import LayoutShop from "./components/shop/shared/Layout";
import UsersAdmin from "./pages/admin/Users";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./providers/AuthProvider";
import AddUser from "./pages/admin/AddUser";
import ShopDetails from "./pages/shop/ShopDetails";
import ShopRegister from "./pages/shop/Register";
import RegisterShop from "./pages/shop/RegisterShop";
import RegisterUser from "./pages/user/Register";
import LoginUser from "./pages/user/Login";
import LayoutUser from "./components/user/shared/Layout";
import SpeciesAdd from "./pages/shop/SpeciesAdd";
import PetsAdd from "./pages/shop/PetsAdd";
import Home from "./pages/user/Home";
import ShopPetDetails from "./pages/user/ShopPetDetails";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/auth/login' element={<Login/>}/>

          <Route element={<PrivateRoutes allowedRoles={['ADMIN']}/>}>
                <Route path='/admin' element={<LayoutAdmin/>}>
                  <Route index element={<DashboardAdmin/>}/>
                  <Route path='users' element={<UsersAdmin/>}/>
                  <Route path='addUser' element={<AddUser/>}/>
                </Route>
              </Route>

          <Route path='/shop/register' element={<ShopRegister/>}/>
          <Route path='/shop/addShop' element={<RegisterShop/>}/>
              <Route path='/shop' element={<LayoutShop/>}>
                  <Route path='dashboard' element={<DashboardShop/>}/>
                  <Route path='details' element={<ShopDetails/>}/>
                  <Route path='add-species' element={<SpeciesAdd/>}/>
                  <Route path='add-pets' element={<PetsAdd/>}/>
              </Route>


          <Route path="/user" element={<LayoutUser />}>
            <Route path="register" element={<RegisterUser />} />
            <Route path="login" element={<LoginUser />} />
            <Route path="home" element={<Home />} />
            <Route path="shop-petdetails/:id" element={<ShopPetDetails/>}/>
          </Route>

         

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
