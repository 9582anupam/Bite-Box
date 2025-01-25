import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Email validation pattern: matches a standard email format
            match: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        phoneNumber: {
            type: String,
        },
        role: {
            type: String,
            enum: ["USER", "ADMIN"],
            default: "USER",
            required: true,
        },
        address: {
            streetAddress: {
                type: String,
            },
            city: {
                type: String,
            },
            state: {
                type: String,
            },
            postalCode: {
                type: String,
            },
            country: {
                type: String,
            },
        },
        cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
        orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    },
    { timestamps: true }
);

// Hash password before saving user
userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            this.password = await bcrypt.hash(this.password, 10);
        }
        next();
    } catch (error) {
        next(error);
    }
});


// Compare password with hashed password
userSchema.methods.isPasswordCorrect = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw error;
    }
};


const User = mongoose.model("User", userSchema);

export default User;