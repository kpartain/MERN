import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeleteButton from "./DeleteButton";

const ListOfObjects =(props) => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/teams")
            .then((res) => {
                setTeams(res.data);
            })
            .catch((errorFound) => console.log("Error: ", errorFound));
    }, []);

    const removeFromDOM = (thingID) => {
        setTeams(teams.filter((thing) => thing._id !== thingID));
    };

    return (
        <div>
           <p><Link to = "/players/list">List</Link> | <Link to = "/players/addplayer"> Add Player</Link></p>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                        <th>(0 = no, 1 = yes, 2 = undecided)</th>
                    </tr>
                    {teams.map((thing, index) => (
                        <tr key={index}>
                            <td>
                                <Link to={"/" + thing._id}>
                                    {thing.name}
                                </Link>
                            </td>
                            <td>{thing.position}</td>
                            <td>
                                {/* edit */}
                                <button
                                    className="btn btn-info"
                                    onClick={(e) =>
                                        navigate("/" + thing._id + "/edit")
                                    }
                                >
                                    Edit
                                </button>
                                {/* delete */}
                                <DeleteButton
                                    teamID={thing._id}
                                    deletionResponse={() =>
                                        removeFromDOM(thing._id)
                                    }
                                />
                            </td>
                            <td>
                                Game 1: {thing.schedule[1]},
                                Game 2: {thing.schedule[2]},
                                Game 3: {thing.schedule[3]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListOfObjects;