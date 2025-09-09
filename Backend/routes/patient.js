import express from 'express';
import { prisma } from '../src/libs/prisma.js'

const router = express.Router();


router.get('/dashboard', async (_req, res) => {
  const userId = 7; 

  const patient = await prisma.patient.findUnique({
    where: { userId },
    include: {
      carePlans: { include: { instructions: true } },
      surveys: { orderBy: { submittedAt: 'desc' }, take: 1 },
      user: {
        include: {
          appointmentsAsPatient: {
            orderBy: { startAt: 'asc' },
            where: { startAt: { gte: new Date() } }
          }
        }
      }
    }
  });

  if (!patient) return res.status(404).json({ error: 'Patient not found' });

  res.json(patient);
});

export default router;