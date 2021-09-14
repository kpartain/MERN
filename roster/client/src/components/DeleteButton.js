import React from 'react';
import axios from 'axios';

const DeleteButton = props => {
  const { teamID, deletionResponse } = props;

  const deleteTeam =(e) => {
    axios.delete("http://localhost:8000/api/teams/" + teamID)
      .then(res => deletionResponse(teamID));
  }

  return (
    <button onClick = { deleteTeam } className="btn btn-danger">Delete</button>
  )
}

export default DeleteButton;