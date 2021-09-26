import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Developers from '../Developers/Developers';
import './Main.css'

const Main = () => {
    const [developers, setDevelopers] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./fakeApi.json')
            .then(res => res.json())
            .then(data => {
                setDevelopers(data)

            })
    }, [])
    const handleCart = (developer) => {
        const newCart = [...cart, developer]
        setCart(newCart)
    }
    return (
        <div>
            <div className="result-container">
                <div className="show-result">
                    {
                        developers.map(developer => <Developers
                            handleCart={handleCart}
                            developer={developer}
                            key={developer.id}
                        ></Developers>)
                    }
                </div>
                <div className="show-information">
                    <Card cart={cart}></Card>
                </div>
            </div>

        </div>
    );
};

export default Main;