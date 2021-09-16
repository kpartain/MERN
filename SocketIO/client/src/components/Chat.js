import React, { useState, useContext, useCallback, useEffect } from "react";
import { SocketContext } from "context/socket";

const Chat = ({ userId }) => {
    const socket = useContext(SocketContext);

    const [joined, setJoined] = useState(false);

    const handleInviteAccepted = useCallback(() => {
        setJoined(true);
    }, []);

    const handleJoinChat = useCallback(() => {
        socket.emit("SEND_JOIN_REQUEST");
    }, []);

    useEffect(() => {
        socket.emit("USER_ONLINE", userId);

        socket.on("JOIN_REQUEST_ACCEPTED", handleInviteAccepted);

        return () => {
            socket.off("JOIN_REQUEST_ACCEPTED", handleInviteAccepted);
        };
    }, [socket, userId, handleInviteAccepted]);

    return (
        <div>
            {joined ? (
                <p>Click the button to send a request to join chat!</p>
            ) : (
                <p>Congratulations! You are accepted to join chat!</p>
            )}
            <button onClick={handleJoinChat}>Join Chat</button>
        </div>
    );
};
export default Chat;
