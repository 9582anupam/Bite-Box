import User from "../models/user.model.js";

// signup a new user
const signUp = async (req, res) => {
    try {
        // Destructure the user's data from the request body
        const { name, email, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                status: 400,
                success: false,
            });
        }

        // Check if the user already exists
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({
                message: "User already exists",
                status: 400,
                success: false,
            });
        }

        // Check for minimum password length
        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 8 characters long",
                status: 400,
                success: false,
            });
        }

        // Apply email regex
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format",
                status: 400,
                success: false,
            });
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        // fetch user information
        const user = await User.findById(newUser._id).select("-password");

        // Send back the created user's information
        return res.status(201).json({
            message: "User registered successfully",
            user,
            status: 201,
            success: true,
        });
    } catch (error) {
        console.error("error while registering a user", error);
        return res.status(500).json({
            message: "Error while registering a user",
            error: error.message,
            status: 500,
            success: false,
        });
    }
};

// login an existing user
const login = async (req, res) => {
    try {
        // Destructure the user's data from the request body
        const { email, password } = req.body;

        // Check if all fields are provided
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                status: 400,
                success: false,
            });
        }

        // Check if the user exists
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({
                message: "User does not exist",
                status: 401,
                success: false,
            });
        }

        // Check if the password is correct
        const isMatch = await user.isPasswordCorrect(password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect password",
                status: 401,
                success: false,
            });
        }

        // Fetch user information
        const userDetails = await User.findById(user._id).select("-password");

        // Send back the user's information
        return res.status(200).json({
            message: "User logged in successfully",
            user: userDetails,
            status: 200,
            success: true,
        });
    } catch (error) {
        console.error("error while logging in a user", error);
        return res.status(500).json({
            message: "Error while logging in a user",
            error: error.message,
            status: 500,
            success: false,
        });
    }
};

export { signUp, login };
