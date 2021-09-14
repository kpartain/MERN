import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const EditForm = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]);

    //FETCH THE DATA
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/teams/" + props._id)
            .then((res) => {
                setName(res.data.name);
                setPosition(res.data.position);
            })
            .catch((errorsFound) => console.log("Error: ", errorsFound));
    }, [props._id]);

    //VALIDATIONS AND EDIT SUBMISION
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/teams/" + props._id, {
                name,
                position,
            })
            .then((res) => navigate("/" + props._id))
            .catch((err) => {
                console.log("ERR \n",err);
                console.log("ERR RESP DATA \n",err.response.data.errors);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    const returnHome = (e) => {
        e.preventDefault();
        navigate("/");
    };
    const resetFields = (e) => {
        e.preventDefault();
        setName(props.name);
        setPosition(props.position);
        setErrors({});
    };

    return (
        <div>
            <h1>EDIT</h1>
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
                    value={name}
                />
                <p>Preferred Position</p>
                <input
                    type="text"
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                />
                <div>
                    <button type="submit">Submit</button>
                    <button onClick={resetFields}>Clear All</button>
                    <button onClick={returnHome}>Cancel Edit</button>
                </div>
            </form>
        </div>
    );
};

export default EditForm;