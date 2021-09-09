import React from 'react';
import { Router } from '@reach/router';
import { Link } from '@reach/router';


import LoginRegistration from '../components/LoginRegistration';

const Main = () => {
  return (
    <div className="container">
        <h1>MAIN PAGE</h1>
        <nav>
            <p><Link to = "/">[main page] Main Page</Link></p>
        </nav>
        
      <Router>
        <LoginRegistration path = "/" />
      </Router>
    </div>
  )
}

export default Main;
