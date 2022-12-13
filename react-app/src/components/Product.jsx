import React from 'react';

const Product = (props) => {
    return (
        <div style={{border: "1px solid black", padding: "15px", margin: "15px"}}>
            <img src={props.product.images} alt={props.product.title} style={{width: "150px", height: "180px"}}/>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div style={{width: "260px"}}>
                    <h1>{props.product.title}</h1>
                    <span>{props.product.description}</span>
                </div>
                <div style={{display: "flex", alignItems: "end", padding: "15px", margin: "15px"}}>
                    <span>{props.product.rating} ☆ {props.product.price} $ </span>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default Product;