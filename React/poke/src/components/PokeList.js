import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeList = (props) => {
    //Note the second argument is an empty array. We are only
    const [responseData, setResponseData] = useState([]);
    const catchEmAll = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                setResponseData(response.data.results);
            });
    };
    const centered = {
        textAlign: "center",
    };
    return (
        <div style={centered}>
            <button onClick={catchEmAll}>Catch Em All</button>
            <ul>
                {responseData.map((eachPokemon, i) => (
                    <li key={i}>{eachPokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokeList;
