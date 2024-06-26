import User from "../models/userModel.js";

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id; 
        
        await User.findByIdAndDelete(userId);
        
       
        res.redirect('/users');
        
        
    } catch (error) {
        console.log("Error deleting user", error);
        return res.status(500).json({
            success: false,
            message: "User cannot be deleted. Please try again."
        });
    }
}

export default deleteUser;