import mongoose, { Schema } from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ["true", "Please provide a collection name"],
        trim: true,
        maxLength: [120, "Collection name should not be more than 120 characters"]
    }
},
{timestamps: true})

export default mongoose.model("Collection", collectionSchema); // this Collection will be saved in database as collections (all lowercase & in plural)