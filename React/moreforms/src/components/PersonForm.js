import React, { useState } from "react";

const PersonForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameERR, setFirstNameERR] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameERR, setLastNameERR] = useState("");
    const [email, setEmail] = useState("");
    const [emailERR, setEmailERR] = useState("");
    const [password, setPassword] = useState("");
    const [passwordERR, setPasswordERR] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordERR, setConfirmPasswordERR] = useState("");
    const createUser = (e) => {
        e.preventDefault();
        if (hasAnyBlankFields() === false && hasAnyErrors() === false) {
            const newUser = {
                "First Name": firstName,
                "Last Name": lastName,
                Email: email,
                Password: password,
            };
            setFirstName("");
            setFirstNameERR("");
            setLastName("");
            setLastNameERR("");
            setEmail("");
            setEmailERR("");
            setPassword("");
            setPasswordERR("");
            setConfirmPassword("");
            setConfirmPasswordERR("");
            console.log(newUser);
            document.getElementById("submissionError").className =
                "text-success";
            document.getElementById("submissionError").innerText =
                "Submitted new user! Check Console for details";
        } else {
            document.getElementById("submissionError").className =
                "text-danger";
            document.getElementById("submissionError").innerText =
                "Unable to submit - please review incomplete fields";
        }
    };

    const handleChange = (e) => {
        switch (e.target.id) {
            case "firstNameInput":
                setFirstName(e.target.value);
                setFirstNameERR(lessThan(2, e.target.value, "firstNameInput"));
                break;
            case "lastNameInput":
                setLastName(e.target.value);
                setLastNameERR(lessThan(2, e.target.value, "lastNameInput"));
                break;
            case "emailInput":
                setEmail(e.target.value);
                setEmailERR(lessThan(2, e.target.value, "emailInput"));
                break;
            case "passwordInput":
                setConfirmPassword("");
                document.getElementById("confirmPasswordInput").className =
                    "form-control form-control-sm";
                if (e.target.value.length < 8) {
                    document.getElementById(
                        "confirmPasswordInput"
                    ).disabled = true;
                }
                setPasswordERR(lessThan(8, e.target.value, "passwordInput"));
                setPassword(e.target.value);
                break;
            case "confirmPasswordInput":
                if (password !== e.target.value) {
                    setConfirmPasswordERR("Passwords must match");
                    setConfirmPassword(e.target.value);
                    document.getElementById("confirmPasswordInput").className =
                        "form-control form-control-sm is-invalid";
                }
                if (password === e.target.value) {
                    setConfirmPasswordERR("");
                    setConfirmPassword(e.target.value);
                    document.getElementById("confirmPasswordInput").className =
                        "form-control form-control-sm is-valid";
                }
                console.log("FINAL");
                break;
            default:
                break;
        }
    };

    const lessThan = (minimum, userInput, changeClassHere) => {
        var returnString = "";
        if (userInput.length < minimum) {
            returnString = " must be longer than " + minimum + " characters";
            document.getElementById(changeClassHere).className =
                "form-control form-control-sm is-invalid";
            return returnString;
        } else {
            document.getElementById(changeClassHere).className =
                "form-control form-control-sm is-valid";
            returnString = "";
            return returnString;
        }
    };

    const hasAnyErrors = () => {
        if (
            firstNameERR === "" &&
            lastNameERR === "" &&
            emailERR === "" &&
            passwordERR === "" &&
            confirmPasswordERR === ""
        ) {
            return false;
        } else {
            console.log(password);
            console.log(confirmPassword);
            return true;
        }
    };

    const hasAnyBlankFields = () => {
        if (
            firstName !== "" &&
            lastName !== "" &&
            email !== "" &&
            password !== "" &&
            password === confirmPassword
        ) {
            return false;
        } else {
            return true;
        }
    };
    return (
        <form onSubmit={createUser} className="m-5">
            <div className="d-flex justify-content-between">
                <div>
                    <div className="d-flex gap-1">
                        <p>First Name</p>
                        <p className="text-danger">{firstNameERR}</p>
                    </div>
                    <div className="d-flex gap-1">
                        <p>Last Name</p>
                        <p className="text-danger">{lastNameERR}</p>
                    </div>
                    <div className="d-flex gap-1">
                        <p>Email Address</p>
                        <p className="text-danger">{emailERR}</p>
                    </div>
                    <div className="d-flex gap-1">
                        <p>Password</p>
                        <p className="text-danger">{passwordERR}</p>
                    </div>
                    <div className="d-flex gap-1">
                        <p>Confirm Password</p>
                        <p className="text-danger">{confirmPasswordERR}</p>
                    </div>
                </div>
                <div className="d-flex flex-column gap-2">
                    <input
                        id="firstNameInput"
                        className="form-control form-control-sm"
                        type="text"
                        onChange={handleChange}
                        value={firstName}
                    />
                    <input
                        id="lastNameInput"
                        className="form-control form-control-sm"
                        type="text"
                        onChange={handleChange}
                        value={lastName}
                    />
                    <input
                        id="emailInput"
                        className="form-control form-control-sm"
                        type="text"
                        onChange={handleChange}
                        value={email}
                    />
                    <input
                        id="passwordInput"
                        className="form-control form-control-sm"
                        type="text"
                        onChange={handleChange}
                        value={password}
                    />
                    <input
                        id="confirmPasswordInput"
                        className="form-control form-control-sm"
                        type="text"
                        onChange={handleChange}
                        value={confirmPassword}
                        disabled={
                            passwordERR.length > 0 || password.length < 7
                                ? true
                                : false
                        }
                    />
                </div>
            </div>
            <button
                id="submissionButton"
                type="submit"
                className={
                    hasAnyBlankFields() || hasAnyErrors()
                        ? "btn btn-secondary mb-2"
                        : "btn btn-primary mb-2"
                }
                onClick={createUser}
            >
                Submit User
            </button>
            <p id="submissionError"></p>
        </form>
    );
};

export default PersonForm;
