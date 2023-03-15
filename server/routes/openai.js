import express from 'express';
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";

dotenv.config();
const router = express.Router();

router.post("/text", async(req, res)=> {
  try {
    const {text, activeChatId} = req.body
    res.status(200).json({text})
  } catch (error) {
    console.error(error.message)
    res.status(500).json({error: error.message})
  }
});

export default router;