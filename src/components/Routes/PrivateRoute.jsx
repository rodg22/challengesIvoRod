import React from 'react'
import { useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../Auth/Context'
import { useLocation } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
  
    // SI ESTA AUTENTICADO O NO MUESTRA A LOS HIJOS
    const {logged} = useContext(AuthContext);
    const {pathname, search } = useLocation();

    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)

  
    return (logged) ? children : <Navigate to='/login' />

}
