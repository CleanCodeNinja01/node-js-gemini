import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config({ path: ".env.local" });

// Check if API_KEY is defined
if (!process.env.API_KEY) {
  console.error("Error: API_KEY is not defined in the environment variables.");
  process.exit(1);
}

const genAI = new GoogleGenAI(process.env.local, {
  model: "gemini-pro",
  //   temperature: 0.7,
  //   maxOutputTokens: 1024,
  //   topP: 0.95,
  //   topK: 40,
});

// Debugging: Log the genAI object
console.log("genAI Object:", genAI);

async function generateResponse() {
  const prompt = `Write a short story about a robot learning to love.`;
  try {
    const model = genAI.getGenerativeModel({model: "gemini-pro"});
    const response = await model.generateContent({ prompt });

    console.log("Full Response:", response);

    if (response && response.text) {
      return response.text;
    } else {
      throw new Error("Invalid response structure from GoogleGenAI.");
    }
  } catch (error) {
    console.error("Error generating response:", error.message || error);
    throw error;
  }
}

generateResponse();
