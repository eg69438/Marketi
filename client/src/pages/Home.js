import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';

function Home() {

    const [listaEProdukteve, setListaEProdukteve] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/Produktet").then((response) => {
        setListaEProdukteve(response.data);
        }).catch((error) => {
            console.error("Error fetching data:", error);
        })
    }, []);
    return (
        <div>
            {listaEProdukteve.map((value, key) => { 
            return <div> {value.emri} </div>;
            })} 
        </div>
    );
}

export default Home;
