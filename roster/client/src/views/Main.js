import React from 'react';
import { Router, Link } from '@reach/router';


import NewForm from '../components/NewForm';
import ListOfObjects from '../components/ListOfObjects';
import SingleObject from '../components/SingleObject';
import EditForm from '../components/EditForm';

const Main = () => {
  return (
    <div>
        <nav>
            <p><Link to = "/players/list">Manage Players</Link> | <Link to = "/status/game/:id"> Manage Player Status</Link></p>
        </nav>
        
      <Router>
        <NewForm path = "/players/addplayer" />
        <EditForm path= "/players/edit/:_id" />
        <SingleObject path= "/status/game/:id" />
        <ListOfObjects path = "/players/list"/>
      </Router>
    </div>
  )
}

export default Main;