import mongoose from "mongoose";

// create schema
const Schema = mongoose.Schema;

// create an instance of schema
const EmpSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "First Name is required"] 
        },
        lastName: {
            type: String,
            required: [true, "Last Name Field is re"]
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
        }
    });

// export employee model
export const EmpModel = mongoose.model("employeeCol", EmpSchema);

