const express = require("express");
const cors = require('cors');
const app = express();
const io = require('socket.io')(server, { cors: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

io.on("connection", socket => {
  console.log(socket.id)
  console.log('Nice to meet you (shakes hand)')
  socket.on("event_from_client", data => {
    socket.broadcast.emit("send_data_to_all_other_clients", data);
  })
});

const server = app.listen(8000, () => console.log("The server is all fired up on port 8000"));
//io.emit emits an event to all connected clients
//socket.broadcast.emit emits an event to all clients other than this particular one, referenced by the socket variable
//socket.emit emits an event directly to this specific client

