import mongoose, {Schema} from "mongoose";

const cartSchema = new Schema(
    {
        productId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        addedAt: {
            type: Date,
            default: Date.now()
        }
    },
    {timestamps: true}
)

export const Cart = mongoose.model("Cart", cartSchema);