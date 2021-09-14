import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

import DeleteButton from "./DeleteButton";

const SingleObject = (props) => {
    const [team, setTeam] = useState({});

    const fetchDataFunction = (id) => {
        axios
            .get("http://localhost:8000/api/teams/" + id)
            .then((res) => {
                setTeam(res.data);
            })
            .catch((errorFound) => console.log("Error: ", errorFound));
    };

    useEffect(() => {
        fetchDataFunction(props._id);
    }, [props._id]);

    return (
        <div>
            <h1>SINGLE OBJECT PAGE BY ID</h1>
            <p>Text: {team.textAttribute}</p>
            <p>Number: {team.numberAttribute}</p>
            <button onClick={(e) => navigate("/")}>Return Home</button>
            <button onClick={(e) => navigate("/" + team._id + "/edit")}>
                Edit
            </button>
            <DeleteButton
                teamID={team._id}
                deletionResponse={() => navigate("/")}
            />
        </div>
    );
};

export default SingleObject;