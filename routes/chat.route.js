import express from "express";


import { addChat, getChat, getChats, readChat } from "../api/controllers/chat.controller.js";
import { verifyToken } from "../api/middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getChats);
router.get("/:id", verifyToken, getChat);
router.post("/", verifyToken, addChat);
router.put("/read/:id", verifyToken, readChat);

export default router;