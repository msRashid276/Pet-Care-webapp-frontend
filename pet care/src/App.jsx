import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import './App.css'
import Layout from './components/shop/shared/Layout'
import Dashboard from './pages/shop/Dashboard'
import Products from './pages/shop/Products'
import classNames from 'classnames'



function App() {


  return (
      <Router>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Dashboard/>}/>
                  <Route path='products' element={<Products/>}/>
              </Route>
          </Routes>
      </Router>
  )
}

export default App
