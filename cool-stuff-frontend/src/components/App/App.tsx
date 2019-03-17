import React from 'react';
import './App.css';
import { AuthProvider, AuthConsumer } from '../Auth/Auth';
import FirebaseAuthService from '../Auth/FirebaseAuthService'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './../../pages/Home';
import Page from './../../pages/Page';
import SignIn from './../../pages/SignIn';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import config from '../../config';

const App = () => (
  <AuthProvider value={ new FirebaseAuthService(config.firebase) }>
    <div>
            <div>
              <Router>
                  <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/page'>Page</Link></li>
                    <li><Link to='/sign-in'>Sign In</Link></li>
                  </ul>
                  <Route exact path='/' component={Home} />
                  <PrivateRoute exact path='/page' component={
                    () => <Page />
                  } />
                  <Route exact path='/sign-in' component={SignIn} />
              </Router>

            </div>
    </div>
  </AuthProvider>
);

export default App;
