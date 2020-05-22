import mongoose from "mongoose";

// create schema
const Schema = mongoose.Schema;

// create an instance of schema
const EmpSchema = new Schema(
    {
        _id: {
            type: String,
            required: [true, "Id is required"]
        },
        name: {
            type: String,
            required: [true, "First Name is required"] 
        },
        dob: {
            type: String,
            required: [true, "DOB is required"]
        },
        qualification:{
            type: String,
            required: [true, "qualification is required"]
        },
        designation: {
            type: String,
            required: [true, "designation is required"]
        },
        team: {
            type: String,
            required: [true, "team is required"]
        },
        email: {
            type: String,
            required: [true, "email is required"]
        },
        notification: {
            type: String,
            required: [false]
        }
    });

// export employee model
export const EmpModel = mongoose.model("employeeCol", EmpSchema);

