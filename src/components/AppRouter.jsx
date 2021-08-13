import React from 'react'
import { Redirect, Route, Router, Switch} from 'react-router-dom'
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router';

function AppRouter() {
    const isAuth = true;
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route => 
                    <Route 
                        component={route.component} 
                        path={route.path} 
                        exact={route.exact}/>
                )}

                <Redirect to="/posts"/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => 
                    <Route 
                        component={route.component} 
                        path={route.path} 
                        exact={route.exact}/>
                )}

                <Redirect to="/posts"/>
            </Switch>




    )
}

export default AppRouter
