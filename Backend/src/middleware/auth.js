import { verifyJwt } from '../libs/jwt.js';
import { prisma } from '../libs/prisma.js';

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const [, token] = header.split(' ');
  if (!token) return res.status(401).json({ message: 'Missing token' });

  try {
    const payload = verifyJwt(token); // { sub, role }
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

export function requireRole(...allowed) {
  return (req, res, next) => {
    if (!req.user?.role || !allowed.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
}

// Optional ownership guard example (doctor can only see assigned patients)
export async function requireDoctorOwnsPatient(req, res, next) {
  const doctorId = req.user?.sub;
  const patientId = Number(req.params.patientId);
  if (!doctorId || !patientId) return res.status(400).json({ message: 'Bad request' });

  const link = await prisma.doctorPatient.findFirst({
    where: { doctorId, patientId }
  });
  if (!link) return res.status(403).json({ message: 'Not your patient' });
  next();
}
