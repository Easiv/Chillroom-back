const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const Room = require('./main_utils/room')

app.get("/", (req, res) => {
	let room =
		res.send('Dziala')
});

app.get("/room", (req, res) => {
	let room = new Room({
		id: req.room.id,
		name: req.room.name,
		host: req.room.host,
		users: req.room.users
	})
	res.send(room)
});

io.on("connection", socket => {
	// Connect
	console.log(`User connected: ${socket.id}`);
	socket.name = socket.id;

	// Disconnect
	socket.on("disconnect", () => {
		console.log(`User disconnected: ${socket.id}`);
	});



});

let port = process.env.PORT || 5000;

http.listen(port, () => {
	console.log(`Chillroom-back działa na http://localhost:${port}`);
});

process.on("exit", function (code) {
	http.close();
	console.log("Server exit", code);
});