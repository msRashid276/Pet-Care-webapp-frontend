import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'


import Login from './pages/admin-shop-shared/Login'
import DashboardShop from './pages/shop/Dashboard'
import DashboardAdmin from './pages/admin/Dashboard'
import Pets from './pages/shop/Pets'
import LayoutAdmin from './components/admin/shared/Layout'
import LayoutShop from './components/shop/shared/Layout'
import UsersAdmin from './pages/admin/Users'
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './providers/AuthProvider'
import AddUser from './pages/admin/AddUser'


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
              
              <Route path='/shop' element={<LayoutShop/>}>
                  <Route path='dashboard' element={<DashboardShop/>}/>
                  <Route path='products' element={<Pets/>}/>
              </Route>
             

          </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
