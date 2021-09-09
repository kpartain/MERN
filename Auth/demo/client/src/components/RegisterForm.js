import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const RegisterForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandlerREGISTER = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/register",
                {
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log("REGISTER RESPONSE\n", res);
                navigate("/dashboard");
            })
            .catch((err) => {
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };
    return (
        <div className="border w-50 p-3">
            <h1>REGISTER</h1>
            <form>
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <div className="d-flex gap-2">
                    <div className="w-50">
                        <p>First Name</p>
                        <p>Last Name</p>
                        <p>Email</p>
                        <p>Password</p>
                        <p>Confirm Password</p>
                    </div>
                    <div className="w-50">
                        <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="..."
                            className="w-100 mb-2"
                        />
                        <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="..."
                            className="w-100 mb-2"
                        />
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="..."
                            className="w-100 mb-2"
                        />
                        <input
                            type="text"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="..."
                            className="w-100 mb-2"
                        />
                        <input
                            type="text"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="..."
                            className="w-100 mb-2"
                        />
                    </div>
                </div>
                <div>
                    <button
                        onClick={onSubmitHandlerREGISTER}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
