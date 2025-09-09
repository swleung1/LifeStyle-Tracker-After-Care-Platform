import express from "express";
import { prisma } from '../src/libs/prisma.js'

const router = express.Router();

router.get("/dashboard", async (req, res) => {
  const doctorId = parseInt(req.query.doctorId || "1");

  if (!doctorId) {
    return res.status(400).json({ error: "Missing doctorId" });
  }

  try {
    
    const doctor = await prisma.user.findUnique({
      where: { id: doctorId },
      select: { id: true, name: true, email: true, role: true, },
    });

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    
    const doctorPatients = await prisma.doctorPatient.findMany({
      where: { doctorId },
      include: {
        patient: {
          include: {
            user: {
              include: {
                appointmentsAsPatient: {
                  orderBy: { startAt: "asc" },
                  select: {
                    id: true,
                    startAt: true,
                    status: true,
                    notes: true,
                  },
                },
              },
            },
            carePlans: {
              where: { active: true },
              orderBy: { createdAt: "desc" },
              take: 1,
              select: { title: true },
            },
            surveys: {
              orderBy: { submittedAt: "desc" },
              take: 1,
              select: {
                responses: true,
                risk: true,
                submittedAt: true,
              },
            },
          },
        },
      },
    });

  
    const patients = doctorPatients.map(({ patient }) => ({
      id: patient.id,
      condition: patient.condition,
      user: {
        id: patient.user.id,
        name: patient.user.name,
        email: patient.user.email,
      },
      carePlan: patient.carePlans[0] || null,
      survey: patient.surveys[0] || null,
      appointments: patient.user.appointmentsAsPatient || [],
    }));

    res.json({ doctor, patients });
  } catch (err) {
    console.error("Doctor dashboard error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;