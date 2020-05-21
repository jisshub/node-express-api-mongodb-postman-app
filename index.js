import express from "express";
import {routerObj} from "./routes/emp_api.js";

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




