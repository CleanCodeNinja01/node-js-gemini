import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const genAI = new GoogleGenAI(process.env.API_KEY);