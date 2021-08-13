import React from 'react'
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default NavBar
