import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const EditForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    //FETCH THE DATA
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors/" + props._id)
            .then((res) => {
                setName(res.data.name);
            })
            .catch((errorsFound) => console.log("Error: ", errorsFound));
    }, [props._id]);

    //VALIDATIONS AND EDIT SUBMISION
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/authors/" + props._id, {
                name,
            })
            .then((res) => navigate("/"))
            .catch((err) => {
                console.log("ERR \n", err);
                console.log("ERR RESP DATA \n", err.response.data.errors);
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
        setErrors({});
    };

    return (
        <div >
            <h2>Edit this author</h2>
            <form onSubmit={onSubmitHandler} className="border border-dark w-50 p-2">
                <div>
                    {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                </div>
                <p>Attribute 1: TEXT</p>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <div className="mt-2">
                    <button className="blueButton" type="submit">
                        Submit
                    </button>
                    <button className="blueButton mx-2" onClick={resetFields}>
                        Clear
                    </button>
                    <button className="blueButton" onClick={returnHome}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditForm;
