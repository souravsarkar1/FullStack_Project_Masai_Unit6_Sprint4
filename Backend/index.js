const express = require('express');
const { connection } = require('./db');
const { userRoutes } = require('./Routes/user.routes');
const { notesRoute } = require('./Routes/notes.routes');

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use('/note', notesRoute);
app.listen(4500, async () => {
    try {
        await connection;
        console.log("Connected To DB");
        console.log("Server is Running at port no. 4500");
    } catch (error) {
        console.log(error.message);
        console.log("Something Went to Wrong");
    }
})