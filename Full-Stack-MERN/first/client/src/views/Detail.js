import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { createHashHistory } from 'history'

export default (props) => {
    const [product, setProduct] = useState({})
    const history = createHashHistory();
    const thisID = props.id;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + thisID)
            .then(res => {
                setProduct(res.data)
            })
    }, [thisID]);

    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/products/' + productID)
        history.goBack();
    }

    return (
        <div>
            <h1>Detail FORM</h1>
            <p><a href={`products/${thisID}`}>Title: {product.title}</a></p>
            <p>Price: $ {product.price}</p>
            <p>Description: {product.description}</p>
            <a href={`/products/${product._id}/edit`}>Edit</a>
            <input type="submit" value="remove" onClick={(e) => {deleteProduct(thisID)}} />
        </div>
    )
}