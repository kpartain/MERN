import React, { useState } from "react";
import axios from "axios";
// import { navigate } from "@reach/router";

const LoginRegistration = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [errors, setErrors] = useState([]);

    const onSubmitHandlerREGISTER = (e) => {
        e.preventDefault();
        console.log("BEFORE SENDING:\n",{ 
            firstName, 
            lastName, 
            email, 
            password, 
            confirmPassword
        })
        axios
            .post("http://localhost:8000/api/register", {
                firstName: firstName, 
                lastName: lastName, 
                email: email, 
                password: password, 
                confirmPassword: confirmPassword,
            }, {withCredentials: true})
            .then((res) => console.log("REGISTER RESPONSE\n", res))
            .catch((err) => {
                console.log(err)
                // const errorResponse = err.response.data.errors;
                // const errorArr = [];
                // for (const key of Object.keys(errorResponse)) {
                //     errorArr.push(errorResponse[key].message);
                // }
                // setErrors(errorArr);
            });
    };

    const onSubmitHandlerLOGIN = (e) => {
        e.preventDefault();
        console.log("BEFORE SENDING:\n",{
            email, 
            password});
        axios
            .post("http://localhost:8000/api/login", {
                email, 
                password}, {withCredentials: true})
            .then((res) => console.log("LOGIN RESPONSE\n", res))
            .catch((err) => {
                console.log(err)
                console.log(err.data)
                console.log(err.body)
                // const errorResponse = err.response.data.errors;
                // const errorArr = [];
                // for (const key of Object.keys(errorResponse)) {
                //     errorArr.push(errorResponse[key].message);
                // }
                // setErrors(errorArr);
            });
    };
    return (
        <div className="d-flex justify-content-between container gap-5">
            <div className="border w-50 p-3">
                <h1>REGISTER</h1>
                <form>
                    {/* {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))} */}
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
                                onChange={(e) =>
                                    setFirstName(e.target.value)
                                }
                                placeholder="..."
                                className="w-100 mb-2"
                            />
                            <input
                                type="text"
                                onChange={(e) =>
                                    setLastName(e.target.value)
                                }
                                placeholder="..."
                                className="w-100 mb-2"
                            />
                            <input
                                type="text"
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="..."
                                className="w-100 mb-2"
                            />
                            <input
                                type="text"
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder="..."
                                className="w-100 mb-2"
                            />
                            <input
                                type="text"
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                placeholder="..."
                                className="w-100 mb-2"
                            />
                        </div>
                    </div>
                    <div>
                        <button onClick={onSubmitHandlerREGISTER} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div className="border w-50 p-3">
                <h1>LOGIN</h1>
                {/* {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))} */}
                <form>
                    <div className="d-flex gap-2">
                        <div className="w-50">
                            <p className="mb-2">Email</p>
                            <p>Password</p>
                        </div>
                        <div className="w-50">
                            <input
                                type="text"
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="..."
                                className="w-100 mb-2"
                            />
                            <input
                                type="text"
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder="..."
                                className="w-100 mb-2"
                            />
                        </div>
                    </div>

                    <button onClick={onSubmitHandlerLOGIN} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LoginRegistration;
