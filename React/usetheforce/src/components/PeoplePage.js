import React, { useState, useEffect } from "react";
import axios from "axios";

const PeoplePage = (props) => {
    const [getPeople, setPeople] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://swapi.dev/api/people` //?query=${query}
            );
            setPeople(result.data.results);
        };
        fetchData();
    }, []); //query
    console.log(getPeople);
    return (
        <div>
            <p>people</p>
            {getPeople.map((person,index) => 
                <p key={index}>{person.name}</p>
            )}
        </div>
    );
};

export default PeoplePage;
