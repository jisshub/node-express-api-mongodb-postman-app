import express from "express";

// router object
export const routerObj = express.Router();

// get the employees
routerObj.get("/employees", (req, res)=>{
    res.send({type: "GET"});
});

// POST the employee
routerObj.post("/employees", (req, res)=>{
    console.log(req.body);
    // send response to postman
    res.send(
        {
            type: "POST",
            empName: req.body.empName,
            empId: req.body.empId
        }
    );
});


// PUT the employee
routerObj.put("/employees/:id", (req, res)=>{
    res.send({type: "PUT"});
});


// DELETE the employee
routerObj.delete("/employees/:id", (req, res)=>{
    res.send({type: "DELETE"});
});
