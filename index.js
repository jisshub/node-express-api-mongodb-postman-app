import express from "express";
import {routerObj} from "./routes/emp_api.js";
import mongoose from "mongoose";

export const empApp = express();
// set up a port
const PORT = process.env.PORT || 3000;
// listen to PORT
empApp.listen(PORT, 'localhost', ()=>{
    console.log(`Server runing on PORT ${PORT}`);
});

// parse the json data.
empApp.use(express.json());

// conacatenate routerObj with /api
empApp.use("/api", routerObj);

// send error as response
empApp.use((err, req, res, next)=>{
    res.status(422).send({error: err.message});
});

// connect to mongodb
mongoose.connect("mongodb://localhost/employeedb", { useNewUrlParser: true });
mongoose.Promise = global.Promise;




