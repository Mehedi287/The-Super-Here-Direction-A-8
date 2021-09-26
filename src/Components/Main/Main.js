import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Developers from '../Developers/Developers';
import './Main.css'

const Main = () => {
    const [developers, setDevelopers] = useState([])
    useEffect(() => {
        fetch('./fakeApi.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])
    return (
        <div>
            <div className="result-container">
                <div className="show-result">
                    {
                        developers?.map(developer => <Developers
                            developer={developer}
                            key={developer.id}
                        ></Developers>)
                    }
                </div>
                <div className="show-information">
                    <Card developer={developers}></Card>
                </div>
            </div>

        </div>
    );
};

export default Main;