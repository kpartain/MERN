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
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        setFirstName("!");
        console.log("Welcome", firstName);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setFirstNameERR(lessThan(2, e.target.value, "First Name"));
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setLastNameERR(lessThan(2, e.target.value, "Last Name"));
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailERR(lessThan(2, e.target.value, "Email"));
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordERR(lessThan(8, e.target.value, "Password"));
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        password !== confirmPassword
            ? setConfirmPasswordERR("Passwords must match")
            : setConfirmPasswordERR("");
    };
    const lessThan = (minimum, userInput, fieldForError) => {
        if (userInput.length < minimum) {
            var returnString =
                fieldForError +
                " must be longer than " +
                minimum +
                " characters";
            return returnString;
        }
    };

    return (
        <form onSubmit={createUser}>
            <div>
                {firstNameERR ? (
                    <p style={{ color: "red" }}>{firstNameERR}</p>
                ) : (
                    ""
                )}
                <label>First Name: </label>
                <input
                    type="text"
                    onChange={handleFirstName}
                    value={firstName}
                />
            </div>
            <div>
                {lastNameERR ? (
                    <p style={{ color: "red" }}>{lastNameERR}</p>
                ) : (
                    ""
                )}
                <label>Last Name: </label>
                <input type="text" onChange={handleLastName} value={lastName} />
            </div>
            <div>
                {emailERR ? <p style={{ color: "red" }}>{emailERR}</p> : ""}
                <label>Email Address: </label>
                <input type="text" onChange={handleEmail} value={email} />
            </div>
            <div>
                {passwordERR ? (
                    <p style={{ color: "red" }}>{passwordERR}</p>
                ) : (
                    ""
                )}
                <label>Password: </label>
                <input type="text" onChange={handlePassword} value={password} />
            </div>
            <div>
                {confirmPasswordERR ? (
                    <p style={{ color: "red" }}>{confirmPasswordERR}</p>
                ) : (
                    ""
                )}
                <label>Confirm Password: </label>
                <input
                    type="text"
                    onChange={handleConfirmPassword}
                    value={confirmPassword}
                />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default PersonForm;
