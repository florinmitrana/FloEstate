import prisma from "../lib/prisma.js";



export const addMessage = async (req, res) => {
    console.log("it works")
    try{
        res.status(200).json(users)

    }catch(err){console.log(err); res.status(500).json({message: "Failed to add message."})}
}
