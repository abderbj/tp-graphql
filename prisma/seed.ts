import { PrismaClient } from '@prisma/client';
import { users, skills, cvs } from '../src/data';

const prisma = new PrismaClient();

async function main() {
  // Seed skills first
  const createdSkills = await Promise.all(
    skills.map((skill) =>
      prisma.skill.create({
        data: {
          designation: skill.designation,
        },
      }),
    ),
  );

  // Create a map of original skill ID to Prisma-generated ID
  const skillIdMap = new Map<number, number>();
  skills.forEach((skill, index) => {
    skillIdMap.set(skill.id, createdSkills[index].id);
  });

  // Seed users
  const createdUsers = await Promise.all(
    users.map((user) =>
      prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          role: user.role,
        },
      }),
    ),
  );

  // Create a map of original user ID to Prisma-generated ID
  const userIdMap = new Map<number, number>();
  users.forEach((user, index) => {
    userIdMap.set(user.id, createdUsers[index].id);
  });

  // Seed CVs with proper skill connections
  for (const cv of cvs) {
    const skillConnections = cv.skillIds.map((skillId) => ({
      id: skillIdMap.get(skillId)!,
    }));

    await prisma.cv.create({
      data: {
        name: cv.name,
        age: cv.age,
        job: cv.job,
        user: {
          connect: { id: userIdMap.get(cv.userId)! },
        },
        skills: {
          connect: skillConnections,
        },
      },
    });
  }

  console.log('✅ Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
