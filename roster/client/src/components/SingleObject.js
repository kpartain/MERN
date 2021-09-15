import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, useParams, Link } from "@reach/router";

import DeleteButton from "./DeleteButton";

const SingleObject = (props) => {
    const [team, setTeam] = useState([]);
    const { id } = useParams(); //game ID, NOT player ID

    const fetchDataFunction = () => {
        axios
            .get("http://localhost:8000/api/teams") //get all of them
            .then((res) => {
                setTeam(res.data); //this is every player and all their teams
                console.log("PAGE LOADED",res.data);
            })
            .catch((errorFound) => console.log("Error: ", errorFound));
    };

    useEffect(() => {
        fetchDataFunction();
        //if schedule.1 === 0, not going to game 1
        //if schedule.2 === 1, going to game 2
        //if schedule.3 === 2, undecided on game 3
    }, []);

    const changeSchedule = (playerObject, newStatus) => {
        changeStatus(playerObject, newStatus);
    };

    const changeStatus = (playerObject, newStatus) => {
        let playerID = playerObject._id;
        playerObject.schedule[id] = newStatus;
        axios.put("http://localhost:8000/api/teams/" + playerID, {
                schedule: playerObject.schedule
            })
            .then((res) => {
                fetchDataFunction();
                console.log(team);
            })
            .catch((errorFound) =>
                console.log("Error in change schedule:", errorFound)
            );
    }

    return (
        <div>
            <h1>Player Status - Game {id}</h1>
            <p>
                <Link to="/status/game/1">Game 1</Link> |{" "}
                <Link to="/status/game/2">Game 2</Link> |{" "}
                <Link to="/status/game/3">Game 3</Link>
            </p>

            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>Player Name</th>
                        <th>(1 = yes, 0 = no, 2 = undecided)</th>
                        <th>Status</th>
                    </tr>
                    {team.map((player) => (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.schedule[id]}
                            </td>
                            <td>
                                <button
                                    className={
                                        player.schedule[id] === 1
                                            ? "btn btn-success"
                                            : "btn btn-outline-dark"
                                    }
                                    onClick={(e) => changeSchedule(player, 1)}
                                >
                                    Playing
                                </button>
                                <button
                                    className={
                                        player.schedule[id] === 0
                                            ? "btn btn-danger"
                                            : "btn btn-outline-dark"
                                    }
                                    onClick={(e) => changeSchedule(player, 0)}
                                >
                                    Not Playing
                                </button>
                                <button
                                    className={
                                        player.schedule[id] === 2
                                            ? "btn btn-warning"
                                            : "btn btn-outline-dark"
                                    }
                                    onClick={(e) => changeSchedule(player, 2)}
                                >
                                    Undecided
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SingleObject;
