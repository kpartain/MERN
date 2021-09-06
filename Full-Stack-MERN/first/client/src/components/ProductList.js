import React from "react";
export default (props) => {
    return (
        <div>
            {props.products.map((product, idx) => {
                return (
                    <p key={idx}>
                        {idx} <br></br>
                        <a href={`/products/${product._id}`}>{product.title}</a>
                        ${product.price},{product.description}
                    </p>
                );
            })}
        </div>
    );
};
