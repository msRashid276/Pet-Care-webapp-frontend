import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'

import Layout from './components/admin-shop/shared/Layout'
import Login from './pages/admin-shop-shared/Login'
import Dashboard from './pages/shop/Dashboard'
import Products from './pages/shop/Products'
import { apiUrl } from './Config'




function App() {
    console.log(apiUrl)
  return (
      <Router>
          <Routes>
              <Route path='/auth/login' element={<Login/>}/>
              <Route path='/shop' element={<Layout/>}>
                  <Route path='dashboard' element={<Dashboard/>}/>
                  <Route path='products' element={<Products/>}/>
              </Route>
              <Route path='/admin' element={<Layout/>}>
                  <Route path='dashboard' element={<Dashboard/>}/>
                  <Route path='products' element={<Products/>}/>
              </Route>
          </Routes>
      </Router>
  )
}

export default App
