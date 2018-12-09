import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = props => {
    const { token, redirectTo, component: Component, path } = props
        return ( token 
                ?   <Route 
                        path={path} 
                        render={props => 
                            <ErrorBoundary>
                                <Component {...props}/>
                            </ErrorBoundary>}/>
                :   <Redirect to={redirectTo}/>
        )
}

export default ProtectedRoute