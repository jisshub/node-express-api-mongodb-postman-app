import express from "express";
import { EmpModel } from "../models/emp_models.js";
import nodemailer from "nodemailer";

// router object
export const routerObj = express.Router();

// get employee by id
routerObj.get("/employees/:id", (req, res)=>{
    EmpModel.findById({_id: req.params.id})
    .then(empData => res.send(empData));
});

// get employee by name and team
routerObj.get("/employees", (req, res) =>{
    EmpModel.find().where({name: req.query.name, team: req.query.team})
    .then((empData) => res.send(empData));
});

// get all employees
routerObj.get("/employees", (req, res)=>{
    EmpModel.find({}).then(empData => {
        res.send(empData);
    })
});

routerObj.post("/employees", (req, res, next)=>{
    // save to db - sent response as json
    EmpModel.create(req.body).then(empData => res.send(empData)).catch(next);    
    
    // create a transport for nodemailer
    let transporter= nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "jissmon476@gmail.com",
            pass: "valsalyam"   
        }
    });
    // create a mail object
    let mailOptions = {
        from: "jissmon476@gmail.com",
        to: req.body.email,
        subject: "Email Verified",
        text: "Data Saved Successfully"
    }    
    // send mail
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
        return res.status(200).send({
            "status": true,
            "message": "Email send successfull"
        });
    });
    // update db with text
    EmpModel.updateOne({"_id": req.body._id}, {$set: {notification: mailOptions.text}});

});