import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ["true", "Product name is required"],
        trim: true,
        maxLength: [120, "Product name should not exceed 120 characters"]
    },
    price: {
        type: Number,
        required: ["true", "Please provide a product price"],
        maxLength: [5, "Product price should not exceed 5 digit"]
    },
    description: String,
    photos: [
        {
            secure_url: {
                type: String,
                required: true
            }
        }
    ],
    stock: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    },
    collectionID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection"
    }
}, {timestamps: true})

export default mongoose.model("Product", productSchema)