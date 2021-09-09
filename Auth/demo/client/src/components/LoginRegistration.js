import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
// import { navigate } from "@reach/router";

const LoginRegistration = (props) => {
    return (
        <div className="d-flex justify-content-between container gap-5">
            <RegisterForm />
            <LoginForm />
        </div>
    );
};

export default LoginRegistration;
