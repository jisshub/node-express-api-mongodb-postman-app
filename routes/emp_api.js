import express from "express";
import { EmpModel } from "../models/emp_models.js";

// router object
export const routerObj = express.Router();

// get all employees
routerObj.get("/employees", (req, res)=>{
    EmpModel.find({}).then(empData => {
        res.send(empData);
    })
});

// get employee by id
routerObj.get("/employees/:id", (req, res)=>{
    EmpModel.findById({_id: req.params.id})
    .then(empData => res.send(empData));
});

// get employee by name and team
routerObj.get("employees/", (req, res) =>{
    EmpModel.find({name: req.query.name,
         team: req.query.team})
         .then(empData => res.send(empData));
});

routerObj.post("/employees", (req, res, next)=>{
    // save to db - sent response as json
    EmpModel.create(req.body).then(empData => {
        res.send(empData);
    }).catch(next);
});
