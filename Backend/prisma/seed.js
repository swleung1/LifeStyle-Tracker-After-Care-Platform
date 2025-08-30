import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function main() {
  // Create 3 doctors
  const doctors = await Promise.all(
    Array.from({ length: 3 }).map(() =>
      prisma.user.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          passwordHash: faker.internet.password(),
          role: 'doctor'
        }
      })
    )
  );

  // Create 5 patients
  const patients = await Promise.all(
    Array.from({ length: 5 }).map(async () => {
      const user = await prisma.user.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          passwordHash: faker.internet.password(),
          role: 'patient'
        }
      });

      const patient = await prisma.patient.create({
        data: {
          userId: user.id,
          condition: faker.lorem.words(3),
          primaryDoctorId: faker.helpers.arrayElement(doctors).id
        }
      });

      // Link doctor-patient
      await prisma.doctorPatient.create({
        data: {
          doctorId: patient.primaryDoctorId,
          patientId: patient.id
        }
      });

      // Create care plan
      const carePlan = await prisma.carePlan.create({
        data: {
          patientId: patient.id,
          title: faker.lorem.sentence(),
          instructions: {
            create: Array.from({ length: 3 }).map((_, i) => ({
              title: faker.lorem.words(3),
              description: faker.lorem.sentence(),
              urgency: faker.helpers.arrayElement(['low', 'medium', 'high']),
              orderIndex: i + 1
            }))
          }
        }
      });

      // Create survey
      await prisma.survey.create({
        data: {
          patientId: patient.id,
          risk: faker.helpers.arrayElement(['ok', 'watch', 'urgent']),
          responses: {
            painLevel: faker.number.int({ min: 1, max: 10 }),
            mobility: faker.number.int({ min: 1, max: 5 }),
            appetite: faker.datatype.boolean(),
            fever: faker.number.float({ min: 98, max: 104, precision: 0.1 })
          }
        }
      });

      // Create appointment
      await prisma.appointment.create({
        data: {
          doctorId: patient.primaryDoctorId,
          patientId: user.id,
          startAt: faker.date.soon(),
          link: faker.internet.url(),
          notes: faker.lorem.sentence(),
          status: faker.helpers.arrayElement(['scheduled','completed','canceled','no_show'])
        }
      });

      return patient;
    })
  );

  console.log('Faker seed complete');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());