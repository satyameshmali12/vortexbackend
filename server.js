import "dotenv/config";
import express from "express";
import cors from "cors";
import eventRoutes from "./routes/eventRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);

app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Vortex Registration API is running" });
});

export default app;
