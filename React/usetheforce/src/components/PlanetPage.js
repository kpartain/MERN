import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            {getPlanets.map((planet, i) => (
                <div key={i}>
                    {i}:<Link to={`/planets/${i}`}>{planet.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default PlanetPage;
