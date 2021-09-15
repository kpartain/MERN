import React, { useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const NewForm = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(validateFormBeforeSubmission()){
            processPOSTRequest();
        };
    };

    const validateFormBeforeSubmission = () => {
        const frontEndErrors = []
        if(name.trim() == "" || name.length < 2) {
            frontEndErrors.push("Name must be more than 2 characters, can't be blank");
        }
        if(frontEndErrors.length !== 0) {
            setErrors(frontEndErrors);
            return false;
        } else if(frontEndErrors.length === 0) {
            return true;
        }
    }

    const processPOSTRequest = () => {
        axios
        .post("http://localhost:8000/api/team", {
            name,
            position,
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
    }
    return (
        <div className="border border-dark p-2">
            <p>
                <Link to="/players/list">List</Link> |{" "}
                <Link to="/players/addplayer"> Add Player</Link>
            </p>
            <form onSubmit={onSubmitHandler} className="border border-dark p-3">
                <h2>Add Player</h2>
                <div>
                    {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                </div>
                <div className="d-flex gap-3">
                    <div className="w-50">
                        <p>Player Name</p>
                        <p>Preferred Position</p>
                    </div>
                    <div className="d-flex flex-column gap-2 w-50">
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                            />
                            <input
                                type="text"
                                onChange={(e) => setPosition(e.target.value)}
                                placeholder="position, if one is preferred"
                            />
                    </div>
                </div>

                <div>
                    <button className="btn btn-success" type="submit" disabled={name.length < 2 ? true : false}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default NewForm;
