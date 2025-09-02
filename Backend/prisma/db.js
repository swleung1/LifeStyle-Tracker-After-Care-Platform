import { PrismaClient } from '@prisma/client';


const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();



module.exports = prisma;