import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const ShowPage = (props) => {
    const { peopleOrPlanet } = useParams();
    const { id } = useParams();
    const [getData, setData] = useState({});
    const endURL = "https://swapi.dev/api/" + peopleOrPlanet + "/" + id;
    useEffect(() => {
        axios.get(endURL).then((response) => {
            setData(response.data);
            console.log("In use effect", response.data);
        });
    }, [endURL]);
    const getReturnDisplay = (getData) => {
        console.log("First in func", getData);
        if (getData.height) {
            document.getElementById("appendHere").innerHTML = `
                <div>
                    <h1>Name: ${getData.name}</h1>
                    <p>Height: ${getData.height}</p>
                    <p>Mass: ${getData.mass}</p>
                    <p>Hair Color:  + ${getData.hair_color}</p>
                    <p>Skin Color: + ${getData.skin_color}</p>
                </div>
            `;
        } else if (getData.climate) {
            document.getElementById("appendHere").innerHTML = `
                <div>
                    <h1>Name: ${getData.name}</h1>
                    <p>Climate: ${getData.climate}</p>
                    <p>Terrain: ${getData.terrain}</p>
                    <p>Surface Water: ${getData.surface_water}</p>
                    <p>Population: ${getData.population}</p>
                </div>
            `;
        }
    };
    return (
    <div onLoad={getReturnDisplay(getData)} id="appendHere">

    </div>
    );
};

export default ShowPage;
