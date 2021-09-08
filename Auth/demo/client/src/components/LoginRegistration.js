import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const NewForm = (props) => {
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [existingUser, setExistingUser] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState([]);

    const onSubmitHandlerREGISTER = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, confirmPassword);
        axios
            .post("http://localhost:8000/api/{COMPLETE THIS}", {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: newUser.password,
                confirmPassword: newUser.confirmPassword,
            })
            .then((res) => alert("NEW USER REGISTERED - JUST DEMO ALERT"))
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    const onSubmitHandlerLOGIN = (e) => {
        e.preventDefault();
        console.log(email, password);
        axios
            .post("http://localhost:8000/api/{COMPLETE THIS}", {
                email: newUser.email,
                password: newUser.password,
            })
            .then((res) => alert("USER LOGGED IN - JUST DEMO ALERT"))
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
            <h1>REGISTER</h1>
            <form onSubmit={onSubmitHandlerREGISTER}>
                <div>
                    {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                </div>
                <p>First Name</p>
                <input
                    type="text"
                    onChange={(e) => setNewUser.firstName(e.target.value)}
                    placeholder="..."
                />

                <p>Last Name</p>
                <input
                    type="text"
                    onChange={(e) => setNewUser.lastName(e.target.value)}
                    placeholder="..."
                />

                <p>Email</p>
                <input
                    type="text"
                    onChange={(e) => setNewUser.email(e.target.value)}
                    placeholder="..."
                />

                <p>Password</p>
                <input
                    type="text"
                    onChange={(e) => setNewUser.password(e.target.value)}
                    placeholder="..."
                />

                <p>Confirm Password</p>
                <input
                    type="text"
                    onChange={(e) => setNewUser.confirmPassword(e.target.value)}
                    placeholder="..."
                />

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <h1>LOGIN</h1>
            {errors.map((err, index) => (
                <p key={index}>{err}</p>
            ))}
            <form onSubmit={onSubmitHandlerLOGIN}>
                <p>Email</p>
                <input
                    type="text"
                    onChange={(e) => setExistingUser.email(e.target.value)}
                    placeholder="..."
                />

                <p>Password</p>
                <input
                    type="text"
                    onChange={(e) => setExistingUser.password(e.target.value)}
                    placeholder="..."
                />
            </form>
        </div>
    );
};

export default NewForm;
