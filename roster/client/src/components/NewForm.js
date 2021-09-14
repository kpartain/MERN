import React, { useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const NewForm = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(name, position);
        axios
            .post("http://localhost:8000/api/team", {
                name,
                position
            })
            .then((res) => navigate("/players/list"))
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };
    return (
        <div>
            <p>
                <Link to="/players/list">List</Link> |{" "}
                <Link to="/players/addplayer"> Add Player</Link>
            </p>
            <form onSubmit={onSubmitHandler}>
                <div>
                    {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                </div>
                <p>Player Name</p>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                />
                <p>Preferred Position</p>
                <input
                    type="text"
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="position, if one is preferred"
                />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default NewForm;
