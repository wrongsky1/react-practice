import React, { useContext } from 'react'
import { Redirect, Route, Switch} from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

function AppRouter() {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route => 
                    <Route 
                        component={route.component} 
                        path={route.path} 
                        exact={route.exact}
                        key={route.path}/>
                )}

                <Redirect to="/posts"/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => 
                    <Route 
                        component={route.component} 
                        path={route.path} 
                        exact={route.exact}
                        key={route.path}/>
                )}

                <Redirect to="/login"/>
            </Switch>




    )
}

export default AppRouter
