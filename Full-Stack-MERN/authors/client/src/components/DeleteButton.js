import React from 'react';
import axios from 'axios';

const DeleteButton = props => {
  const { authorID, deletionResponse } = props;

  const deleteAuthor =(e) => {
    axios.delete("http://localhost:8000/api/authors/" + authorID)
      .then(res => deletionResponse(authorID));
  }

  return (
    <button className="gradientButtonTwo" onClick = { deleteAuthor }>Delete</button>
  )
}

export default DeleteButton;