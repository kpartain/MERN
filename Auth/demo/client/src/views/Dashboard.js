import { navigate, useParams } from "@reach/router";
import React, {useState, useEffect} from "react";
import axios from "axios";
// import { navigate } from "@reach/router";

const Dashboard = (props) => {
    const { id } = useParams();
    const params = useParams();
    const [thisUsersID, setThisUsersID] = useState("")
    const [thisUserObject, setThisUserObject] = useState({});
    useEffect(() => {
        setThisUsersID(id);

            console.log("ID in Dashboard useEffect", id)
            axios
            .get("http://localhost:8000/api/users/" + id, {withCredentials: true})
            .then((res) => {
                console.log(res)
                setThisUserObject(res.data);
            })
            .catch((errorFound) => console.log("Error: ", errorFound));
    }, [id])
    

    return (
        <div>
            <h1>Welcome, {thisUserObject.firstName}</h1>
            
        </div>
    );
};

export default Dashboard;
