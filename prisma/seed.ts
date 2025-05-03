import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const python = await prisma.skill.create({ data: { designation: 'Python' } });
  const graphql = await prisma.skill.create({
    data: { designation: 'GraphQL' },
  });
  const react = await prisma.skill.create({ data: { designation: 'React' } });
  const node = await prisma.skill.create({ data: { designation: 'Node' } });
  const docker = await prisma.skill.create({ data: { designation: 'Docker' } });
  const typescript = await prisma.skill.create({
    data: { designation: 'Typescript' },
  });

  const gritli = await prisma.user.create({
    data: {
      name: 'Gritli',
      email: 'gritli@gmail.com',
      role: 'ADMIN',
    },
  });

  const abder = await prisma.user.create({
    data: {
      name: 'abder',
      email: 'abder@gmail.com',
      role: 'USER',
    },
  });

  await prisma.cv.create({
    data: {
      name: 'Gritli CV',
      age: 40,
      job: 'Full Stack Developer',
      userId: gritli.id,
      skills: {
        connect: [{ id: docker.id }, { id: graphql.id }, { id: react.id }],
      },
    },
  });

  await prisma.cv.createMany({
    data: [
      {
        name: 'Abder CV',
        age: 30,
        job: 'Full Stack Developer',
        userId: abder.id,
      },
      {
        name: 'Abder CV v2',
        age: 30,
        job: 'Cloud Architect',
        userId: abder.id,
      },
    ],
  });

  const cvList: { name: string; age: number; job: string; userId: number }[] =
    [];
  for (let i = 0; i < 10; i++) {
    cvList.push({
      name: 'Gritli CV',
      age: 40,
      job: 'ML Engineer',
      userId: gritli.id,
    });
  }

  await prisma.cv.createMany({ data: cvList });

  // Connect skills to the bulk CVs
  const allCvs = await prisma.cv.findMany({ where: { userId: gritli.id } });
  for (const cv of allCvs) {
    await prisma.cv.update({
      where: { id: cv.id },
      data: {
        skills: {
          connect: [{ id: python.id }, { id: node.id }, { id: typescript.id }],
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
