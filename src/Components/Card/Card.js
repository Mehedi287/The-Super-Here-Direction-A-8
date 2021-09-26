import React from 'react';
import './Card.css'
const Card = (props) => {
    console.log(props.cart);
    let totalSalary = 0;
    props.cart.map(salary => { totalSalary = totalSalary + salary.salary })
    return (
        <div className="cart-info">
            <h2>Total Developers: {props.cart.length} </h2>
            <p className="total">Total Amount : {totalSalary} </p>

            {props.cart.map(cart => <h2 className="name"> Name : {cart.name}</h2>)}
        </div>
    );
};

export default Card;