import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { z } from "zod";
import patientRoutes from '../routes/patient.js';
import doctorRoutes from '../routes/doctor.js'


dotenv.config();
const app = express();


app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use('/api/patient', patientRoutes);
app.use('/api/doctor', doctorRoutes)

// health check
app.get("/api/health", (_req, res) => res.json({ status: "API running ✅" }));


export default app;
