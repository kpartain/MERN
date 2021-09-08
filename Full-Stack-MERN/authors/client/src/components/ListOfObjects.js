import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import DeleteButton from "./DeleteButton";

const ListOfObjects = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthors(res.data);
            })
            .catch((errorFound) => console.log("Error: ", errorFound));
    }, []);

    const removeFromDOM = (thingID) => {
        setAuthors(authors.filter((thing) => thing._id !== thingID));
    };

    return (
        <div>
            <h2>We have quotes by:</h2>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Actions Available</th>
                    </tr>
                    {authors.map((thing, index) => (
                        <tr key={index}>
                            <td>{thing.name}</td>
                            <td>
                                <button
                                    className="gradientButtonOne mx-2"
                                    onClick={(e) =>
                                        navigate("/" + thing._id + "/edit")
                                    }
                                >
                                    Edit
                                </button>
                                <DeleteButton
                                    authorID={thing._id}
                                    deletionResponse={() =>
                                        removeFromDOM(thing._id)
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListOfObjects;
