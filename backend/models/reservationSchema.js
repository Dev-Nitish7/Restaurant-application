import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
     firstName:{
        type:String,
        require:true,
        minLength:[3,"first name must contain at least 3 characters"],
        maxLength:[30,"first name cannot exceed 30 characters"],
     },
     lastName:{
        type:String,
        require:true,
        minLength:[3,"last name must contain at least 3 characters"],
        maxLength:[30,"last name cannot exceed 30 characters"],
     },
     email:{
        type:String,
        require:true,
        validate:[validator.isEmail,"provide a vaild email"],
     },
     phone:{
        type:String,
        require:true,
        minLength:[10,"phone number must cantain only 10 digit"],
        maxLength:[10,"phone number must cantain only  10 digit"],
     },

     time:{
        type:String,
        require:true,
     },
     date:{
        type:String,
        require:true,
     },


});

export const Reservation = mongoose.model("Reservation", reservationSchema);
