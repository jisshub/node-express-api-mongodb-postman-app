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

// use the router object 
empApp.use("/api", routerObj);

// connect to mongodb
mongoose.connect("mongodb://localhost/employeedb", { useNewUrlParser: true });
mongoose.Promise = global.Promise;



