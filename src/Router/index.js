import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import NotFound from '../views/error/NotFound';
import Navbar from '../components/Navbar';
import Login from '../views/auth/Login';
import UsersIndex from '../views/users/index';
import UsersShow from '../views/users/Show';

function Router(){

    return (
        <Switch>
            <Route exact path='/'>
                <Navbar>
                    <Home/>
                </Navbar>
            </Route>
            <Route exact path='/about'>
                <Navbar>
                    <About/>
                </Navbar>
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/users'>
                <Navbar>
                    <UsersIndex/>
                </Navbar>
                
            </Route>
            <Route exact path='/users/:identifier'>
                <Navbar>
                    <UsersShow/>
                </Navbar>
                
            </Route>
            <Route path='*'>
                <NotFound/>
            </Route>
        </Switch>
    );
}

export default Router;