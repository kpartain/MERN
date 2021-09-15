import React from 'react';
import axios from 'axios';

const DeleteButton = props => {
  const { teamID, deletionResponse } = props;

  const deleteTeam =(e) => {
    e.preventDefault();
    let messageClicked = window.confirm("Are you sure?");
    if(messageClicked) {
      deleteRequest();
    } else {
      alert("Deletion was not processed.")
    }
  }
  const deleteRequest = () => {
    axios.delete("http://localhost:8000/api/teams/" + teamID)
      .then(res => deletionResponse(teamID));
  }
  return (
    <button onClick = { deleteTeam } className="btn btn-danger">Delete</button>
  )
}
export default DeleteButton;