import React from 'react';
import './Developers.css'
const Developers = (props) => {

    const { name, id, salary, catagory, exprience, country, img } = props.developer
    return (

        <div className="cart">
            <img src={img} alt="" />
            <h2> Name : {name} </h2>
            <p>Country : {country} </p>
            <p>Salary : ${salary} </p>
            <p>ID : {id}</p>
            <p>Catagory : {catagory} </p>
            <p>Exprience : {exprience}</p>
            <button onClick={() => props.handleCart(props.developer)}><i class="fas fa-cart-plus"></i>Add To Cart</button>
        </div>

    );
};

export default Developers;