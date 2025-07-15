import JWT from "jsonwebtoken";
// import User from "../models/User.js";
import {User} from "../models/User.js";
import Subscription from "../models/Subscription.js";
// protected routes token based
const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }

    catch (err) {
        console.log(err);
        res.json(err);
    }

}
const isAdmin = async (req, res, next) => {
    try {
        console.log("Decoded token:", req.user);
        const user = await User.findById(req.user._id);
        console.log("Fetched user from DB:", user);


        if (user.role !== 1) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access – Admins only",
            });
        }

        next();
    } catch (error) {
        console.error("Error in isAdmin middleware:", error);
        res.status(500).json({
            success: false,
            message: "Error in admin middleware",
            error,
        });
    }
};



const isSubscribed = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const subscription = await Subscription.findOne({ user: userId });
        if (!subscription) {
            return res.status(403).json({
                success: false,
                message: "You need an active subscription to perform this action",
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};


export { requireSignIn, isAdmin, isSubscribed };

