import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'


import Login from './pages/admin-shop-shared/Login'
import DashboardShop from './pages/shop/Dashboard'
import DashboardAdmin from './pages/admin/Dashboard'
import Pets from './pages/shop/Pets'
import { apiUrl } from './Config'
import LayoutAdmin from './components/admin/shared/Layout'
import LayoutShop from './components/shop/shared/Layout'
import UsersAdmin from './pages/admin/Users'


function App() {
  console.log(apiUrl);
  
  return (
      <Router>
          <Routes>
              <Route path='/auth/login' element={<Login/>}/>
              <Route path='/shop' element={<LayoutShop/>}>
                  <Route path='dashboard' element={<DashboardShop/>}/>
                  <Route path='products' element={<Pets/>}/>
              </Route>

              <Route path='/admin' element={<LayoutAdmin/>}>
                  <Route path='dashboard' element={<DashboardAdmin/>}/>
                  <Route path='users' element={<UsersAdmin/>}/>
              </Route>

          </Routes>
      </Router>
  )
}

export default App
