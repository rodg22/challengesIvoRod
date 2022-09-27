import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Auth/Context'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({children}) => {
    // SI ESTA AUTENTICADO O NO MUESTRA A LOS HIJOS
    const {logged} = useContext(AuthContext)
  
  
    return (!logged) ?  children : <Navigate to='/HomeScreen'/>

}
