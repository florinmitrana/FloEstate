import express from "express";
import { addMessage} from "../api/controllers/message.controller.js";
import {verifyToken} from "../api/middleware/verifyToken.js"
const router  = express.Router();

router.get("/:chatId",verifyToken,addMessage);


export default router;
