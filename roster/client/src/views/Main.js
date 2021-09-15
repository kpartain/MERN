import React from 'react';
import { Router, Link } from '@reach/router';

import NewForm from '../components/NewForm';
import ListOfObjects from '../components/ListOfObjects';
import SingleObject from '../components/SingleObject';

const Main = () => {
  return (
    <div>
        <nav>
            <p><Link to = "/players/list">Manage Players</Link> | <Link to = "/players/addplayer">Add Player</Link> | <Link to = "/status/game/1">Game 1</Link> | <Link to = "/status/game/2">Game 2</Link>  | <Link to = "/status/game/3">Game 3</Link></p>
        </nav>
        
      <Router>
        <NewForm path = "/players/addplayer" />
        <SingleObject path= "/status/game/:id" />
        <ListOfObjects path = "/players/list"/>
      </Router>
    </div>
  )
}

export default Main;