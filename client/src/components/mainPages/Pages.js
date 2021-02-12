import React, {useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import {GlobalState} from '../../GlobalState';
import Home from './Home/Home';
import Product from './Product/Product';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Details from './Details/Details';
import CreateProduct from './CreateProduct/CreateProduct';
import NotFound from './Utils/Not-Found/NotFound'

function Pages() {

    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Product} />

            <Route path="/details/:id" component={Details} />

            <Route path="/login" component={ isLogged ? NotFound : Login} />
            <Route path="/register" component={ isLogged ? NotFound : Register} />

            <Route path="/create_product" component={ isAdmin ? CreateProduct : NotFound } />
            <Route path="/edit_product/:id" component={ isAdmin ? CreateProduct : NotFound } />

            <Route path="/details/:id" component={ isLogged ? Details : NotFound } />

            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Pages
