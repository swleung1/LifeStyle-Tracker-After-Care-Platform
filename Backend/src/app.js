import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { z } from 'zod';
import passport from "passport";
import patientRoutes from '../routes/patient.js';
import doctorRoutes from '../routes/doctor.js'

dotenv.config();

const app = express();


app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Passport (For OAuth)
app.use(passport.initialize());

// Routes
// import authRoutes from './routes/authRoutes.js';

// app.use('/api/auth', authRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/doctor', doctorRoutes)

// health check
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

export default app;
