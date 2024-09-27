import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../providers/AuthProvider'

const PrivateRoutes = () => {
    const {auth} = useContext(AuthContext);
    return(
        auth.token && auth.role === 'ADMIN' ? <Outlet/> : <Navigate to="/auth/login"/>
    )
}

export default PrivateRoutes