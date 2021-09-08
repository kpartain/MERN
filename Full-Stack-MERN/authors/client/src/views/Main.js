import React from 'react';
import { Router } from '@reach/router';
import { Link } from '@reach/router';


import NewForm from '../components/NewForm';
import ListOfObjects from '../components/ListOfObjects';
import EditForm from '../components/EditForm';

const Main = () => {
  return (
    <div className="container">
        <h1>Favorite authors</h1>
        <nav>
            <p><Link to = "/">Home</Link></p>
            <p><Link to = "/new">Add an Author</Link></p>
        </nav>
        
      <Router>
        <NewForm path = "/new" />
        <EditForm path= "/:_id/edit" />
        <ListOfObjects path = "/"/>
      </Router>
    </div>
  )
}

export default Main;