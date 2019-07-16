require("dotenv").config();
const express = require("express");
const session = require('express-session');
const messagesCtrl = require("./messagesCtrl");

const app = express();

app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14 // 2 weeks
    }
}))


app.get("/api/messages", messagesCtrl.getAllMessages);
app.post("/api/message", messagesCtrl.createMessage);
app.post("/api/message", messagesCtrl.createMessage);

const port = process.env.SERVER_PORT;
app.listen(port, () => { console.log(`Server listening on port ${port}`);
});