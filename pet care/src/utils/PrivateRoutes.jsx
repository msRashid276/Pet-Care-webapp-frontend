import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../providers/AuthProvider'

const PrivateRoutes = ({allowedRoles}) => {
    const {auth} = useContext(AuthContext)
    return(
        auth.token && allowedRoles.includes(auth.role) ? <Outlet/> : <Navigate to="/auth/login"/>
    )
}

export default PrivateRoutes