import React from "react";
import { Router } from "@reach/router";
//context
import {SocketContext, socket} from './context/socket';

//child components
import Lobby from "./components/Lobby.js";
import Chat from "./components/Chat";


const Main = () => {
    return (
        <div>
            <Router>
                <SocketContext.Provider value={socket}>
                    <Chat path="/chat" />
                    <Lobby path="/" />
                </SocketContext.Provider>
            </Router>
        </div>
    );
};
export default Main;
