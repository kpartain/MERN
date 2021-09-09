import React, {useState} from 'react';
import { Router } from '@reach/router';
import { Link } from '@reach/router';


import LoginRegistration from '../components/LoginRegistration';
import Dashboard from './Dashboard';

const Main = () => {
  return (
    <div className="container">
        <h1>MAIN PAGE</h1>
        <nav>
            <p><Link to="/">[main page] Main Page</Link></p>
        </nav>
        
      <Router>
        <LoginRegistration path="/"/>
        {/* at this point, dashboard will have a unique id.  */}
        {/* if you navigate manually, you'll see the login page */}
        <LoginRegistration path="/dashboard"/>
        <Dashboard path="/dashboard/:id"/>
      </Router>
    </div>
  )
}

export default Main;
