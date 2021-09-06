import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { createHashHistory } from 'history'

export default (props) => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const history = createHashHistory()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
    }, [id])

    const updateProduct = e => {
        e.preventDefault();
            axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
        .then(res => console.log(res));
        history.goBack();
    }

    return (
        <div>
            <h1>Update a Product</h1>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description" 
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <button type="submit" onClick={updateProduct}>Submit</button>
        </div>
    )
}

