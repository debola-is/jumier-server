import express from 'express';
const authRouter = require('./routes/route_auth');
const mongoose = require('mongoose');



const PORT = process.env.PORT || 3000;
const app = express();


// Initializing middlewares & routers to be used
app.use(express.json());




app.listen(PORT, () => {
    console.log("Speak master.. your server is listening on port: ", PORT);
});