import React, { useState } from "react";

const VersionTwo = (props) => {
    const [attributes, setAttributes] = useState([
        { field: "firstName", value: "", errors: [] },
        { lastName: "", errors: [] },
        { email: "", errors: [] },
        { password: "", errors: [] },
        { confirmPassword: "", errors: [] }
    ]);
    const emptyAttributes = [
        { firstName: "", errors: [] },
        { lastName: "", errors: [] },
        { email: "", errors: [] },
        { password: "", errors: [] },
        { confirmPassword: "", errors: [] }
    ];
    const createUser = (e) => {
        e.preventDefault();
        if (hasAnyBlankFields() === false && hasAnyErrors() === false) {
            const newUser = {
                "First Name": attributes.firstName,
                "Last Name": attributes.lastName,
                Email: attributes.email,
                Password: attributes.password,
            };
            setAttributes(emptyAttributes);
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
        e.preventDefault();
        var duplicateState = attributes;
        var currentChange = e.target.id;
        if(currentChange === "firstNameInput"){
            duplicateState[0].firstName = e.target.value;
            if(e.target.value.length < 2) {
                duplicateState[0].errors.push("must have more than two characters");
            }
        } else if(currentChange === "lastNameInput"){
            duplicateState[1].lastName = e.target.value;
            if(e.target.value.length < 2) {
                duplicateState[1].errors.push("must have more than two characters");
            }
        } else if(currentChange === "emailInput") {
            duplicateState[2].email = e.target.value;
            if(e.target.value.length < 2) {
                duplicateState[2].errors.push("must have more than two characters");
            }
        } else if(currentChange === "passwordInput"){
            duplicateState[4].confirmPassword = e.target.value;
            document.getElementById("confirmPasswordInput").className = "form-control form-control-sm";
            if(e.target.value.length < 8) {
                duplicateState[3].errors.push("Password must have at least 8 characters");
                document.getElementById("confirmPasswordInput").disabled = true;
            }
            duplicateState[3].password = e.target.value;
        }else if (currentChange === "confirmPasswordInput"){
            if (attributes[3].password !== e.target.value) {
                duplicateState[4].errors.push("Passwords must match!");
                duplicateState[4].confirmPassword = e.target.value;
                document.getElementById("confirmPasswordInput").className = "form-control form-control-sm is-invalid";
            }
            if (attributes[3].password === e.target.value) {
                duplicateState[4].errors = [];
                duplicateState[4].confirmPassword = e.target.value;
                document.getElementById("confirmPasswordInput").className = "form-control form-control-sm is-valid";
            }
        }
        setAttributes(duplicateState);
    };

    const hasAnyErrors = () => {
        var copyState = attributes;
        copyState.map((eachAttribute) => {
            return eachAttribute.errors.length > 0 ? true : false;
        });
    };

    const hasAnyBlankFields = () => {
        let returnBoolean = false;
        if (attributes[0].firstName.length === 0) {
            returnBoolean = true;
        }
        if (attributes[1].lastName.length === 0) {
            returnBoolean = true;
        }
        if (attributes[2].email.length === 0) {
            returnBoolean = true;
        }
        if (attributes[3].password.length === 0) {
            returnBoolean = true;
        }
        if (attributes[4].confirmPassword.length === 0) {
            returnBoolean = true;
        }
        return returnBoolean;
    };
    return (
        <form onSubmit={createUser} className="m-5">
            <div className="d-flex justify-content-between m-5">
                <div>
                    <div className="d-flex gap-1">
                        <p>First Name</p>
                        {attributes[0].errors.map((e) => {
                            return <p className="text-danger">{e}</p>;
                        })}
                    </div>
                    <div className="d-flex gap-1">
                        <p>Last Name</p>
                        {attributes[1].errors.map((e) => {
                            return <p className="text-danger">{e}</p>;
                        })}
                    </div>
                    <div className="d-flex gap-1">
                        <p>Email Address</p>
                        {attributes[2].errors.map((e) => {
                            return <p className="text-danger">{e}</p>;
                        })}
                    </div>
                    <div className="d-flex gap-1">
                        <p>Password</p>
                        {attributes[3].errors.map((e) => {
                            return <p className="text-danger">{e}</p>;
                        })}
                    </div>
                    <div className="d-flex gap-1">
                        <p>Confirm Password</p>
                        {attributes[4].errors.map((e) => {
                            return <p className="text-danger">{e}</p>;
                        })}
                    </div>
                </div>
                <div className="d-flex flex-column gap-2">
                    <input
                        id="firstNameInput"
                        className="form-control form-control-sm"
                        type="text"
                        onChange={handleChange}
                        value={attributes[0].firstName}
                    />
                    <input
                        id="lastNameInput"
                        className="form-control form-control-sm"
                        type="text"
                        onChange={handleChange}
                        value={attributes[1].lastName}
                    />
                    <input
                        id="emailInput"
                        className="form-control form-control-sm"
                        type="text"
                        onChange={handleChange}
                        value={attributes[2].email}
                    />
                    <input
                        id="passwordInput"
                        className="form-control form-control-sm"
                        type="text"
                        onChange={handleChange}
                        value={attributes[3].password}
                    />
                    <input
                        id="confirmPasswordInput"
                        className="form-control form-control-sm"
                        type="text"
                        onChange={handleChange}
                        value={attributes[4].confirmPassword}
                        disabled={
                            attributes[3].errors.length > 0 ||
                            attributes[3].password.length < 7
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
                        ? "btn btn-secondary mb-2 m-5"
                        : "btn btn-primary mb-2 m-5"
                }
                onClick={createUser}
            >
                Submit User
            </button>
            <p id="submissionError"></p>
        </form>
    );
};

export default VersionTwo;
