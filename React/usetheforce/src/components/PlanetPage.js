import React, { useState, useEffect } from "react";
import axios from "axios";

const PlanetPage = (props) => {
    const [getPlanets, setPlanets] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://swapi.dev/api/planets` //?query=${query}
            );
            setPlanets(result.data.results);
        };
        fetchData();
    }, []); //query
    console.log(getPlanets);
    return (
        <div>
            <p>people</p>
            {getPlanets.map((planet, index) => (
                <div key={index}>{planet.name}</div>
            ))}
        </div>
    );
};

export default PlanetPage;
