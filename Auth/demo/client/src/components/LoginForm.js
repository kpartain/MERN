import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandlerLOGIN = (e) => {
        e.preventDefault();
        console.log("BEFORE SENDING:\n", {
            email,
            password,
        });
        axios
            .post(
                "http://localhost:8000/api/login",
                {
                    email,
                    password,
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log("LOGIN RESPONSE\n", res)
                console.log("USER ID\n", res.data.userID)
                navigate("/dashboard/"+res.data.userID);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                let errorMsg = ["Incorrect email or password, try again"];
                setErrors(errorMsg);
            });
    };
    return (
        <div className="border w-50 p-3">
            <h1>LOGIN</h1>
            {errors.map((err, index) => (
                <p key={index}>{err}</p>
            ))}
            <form>
                <div className="d-flex gap-2">
                    <div className="w-50">
                        <p className="mb-2">Email</p>
                        <p>Password</p>
                    </div>
                    <div className="w-50">
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
                    </div>
                </div>

                <button
                    onClick={onSubmitHandlerLOGIN}
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
