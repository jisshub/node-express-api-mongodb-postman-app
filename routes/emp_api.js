import express from "express";
import { EmpModel } from "../models/emp_models.js";

// router object
export const routerObj = express.Router();

routerObj.get("/employees", (req, res)=>{
    res.send({type: "GET"});
});

routerObj.post("/employees", (req, res)=>{
    // save to db - sent response as json
    EmpModel.create(req.body).then((empData) => 
    res.send(empData));
});

routerObj.put("/employees/:id", (req, res)=>{
    res.send({type: "PUT"});
});

routerObj.delete("/employees/:id", (req, res)=>{
    res.send({type: "DELETE"});
});

