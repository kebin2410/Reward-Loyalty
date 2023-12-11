const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").Server(app);
// const io = require("socket.io")(server); //socket.io import for server
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require("dotenv").config({ path: "./config.env" });
const connectDb = require("./utilsServer/connectDb");
const PORT = process.env.PORT || 3000;
const {
  addUser,
  removeUser,
  findConnectedUser,
} = require("./utils/roomActions");
const {
  loadTexts,
  sendText,
  setMessageToUnread,
  getUserInfo,
} = require("./utils/messageActions");

connectDb();
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(express.json()); //bodyparser- used basically for getting req.body in a good format
//In next js, server an app both run on the same port, i.e. port 3000
// we don't need two separate ports for frontend and backend

//io.on('connection') is triggered by
//socket.current = io(baseUrl) in messages.js
//this is basically when socket makes the initial connection

nextApp.prepare().then(() => {
  app.use("/api/signup", require("./api/signup"));
  app.use("/api/auth", require("./api/auth"));
  app.use("/api/posts", require("./api/posts"));
  app.use("/api/notifications", require("./api/notifications"));
  app.use("/api/profile", require("./api/profile"));
  app.use("/api/search", require("./api/search"));
  app.use("/api/chats", require("./api/chats"));

  app.all("*", (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Express server running on ${PORT}`);
  });
});
//we're calling app.all because all pages in next.js are SSR(Server Side Rendered)
//if we don't type app.all, the files inside the pages folder won't work
