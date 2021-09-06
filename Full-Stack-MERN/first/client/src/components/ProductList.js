import React from "react";
import axios from 'axios';

export default (props) => {
    const deleteProduct = (productId) => {
        return (
            axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {props.removeFromDom(productId);
        })
        )
        
    }

    return (
        <div>
            <h1>Product List</h1>
            {props.products.map((product, idx) => {
                return (
                    <div key={idx}>
                        <p>{idx}</p>
                        <p><a href={`/products/${product._id}`}>{product.title}</a></p>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
