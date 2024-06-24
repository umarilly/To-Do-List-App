
import { Schema , model } from "mongoose";

const exerciseSchema = new Schema({
    username : {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true
    },
    duration : {
        type: Number,
        require: true
    },
    date : {
        type: Date,
        require: true
    }
    ,
    userId:{
        type:String,
        require:true,
    }
},{
    timestamps: true,
})

const Exercise = model('Exercise',exerciseSchema);
export default Exercise;
