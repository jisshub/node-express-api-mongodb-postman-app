import express from "express";
import { EmpModel } from "../models/emp_models.js";

// router object
export const routerObj = express.Router();

// get the employees
routerObj.get("/employees", (req, res)=>{
    res.send({type: "GET"});
});

// POST the employee
routerObj.post("/employees", (req, res)=>{
    // save to db - sents response as json
    EmpModel.create(req.body).then((empData) => 
    res.send(empData));
});

// PUT the employee
routerObj.put("/employees/:id", (req, res)=>{
    res.send({type: "PUT"});
});

// DELETE the employee
routerObj.delete("/employees/:id", (req, res)=>{
    res.send({type: "DELETE"});
});

