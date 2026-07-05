import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHook from "./controllers/clerkWebHooks.js";

connectDB();
const app = express();

app.use(cors());

// middleware
app.use(express.json());
app.use(clerkMiddleware());

app.post("/api/clerk", clerkWebHook);

app.get("/", (req, res) => {
  return res.send("api is working fine");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(` server is running on PORT ${PORT}`));
