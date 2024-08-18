import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({component : Component , ...rest} ) => {

    const checkAuthOnServer = ()=>{
        //calling the server to validate the access key
    }

    return (
        <Route 
            {...rest} 
            render={
            (props)=>{
                if(localStorage.getItem('authentication-key')){
                    if(checkAuthOnServer()){
                        return <Component {...props}/>
                    }
                }
                else{
                    return <Redirect to="/unauthorized"/>
                }
            }
        }   
        />
    )
}

export default ProtectedRoute
