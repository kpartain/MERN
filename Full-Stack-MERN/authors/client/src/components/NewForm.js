import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const NewForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(name);
        axios
            .post("http://localhost:8000/api/new-author", {
                name: name,
            })
            .then((res) => navigate("/"))
            .catch((err) => {
                console.log(err.response);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };
    return (
        <div >
            <h2>Add a new author:</h2>
            <form onSubmit={onSubmitHandler} className="border border-dark w-50 p-1">
                <div>
                    {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                </div>
                <p>Name:</p>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Must have 3+ characters"
                />
                <div>
                    <button className="blueButton mt-2 " type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default NewForm;
