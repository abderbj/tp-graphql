export const users = [
    {
      id: 1,
      name: "Lina",
      email: "lina@example.com",
      role: "ADMIN",
      cvs: [1, 4, 7, 10, 13, 16, 19, 22, 25]
    },
    {
      id: 2,
      name: "Yassine",
      email: "yassine@example.com",
      role: "USER",
      cvs: [2, 5, 8, 11, 14, 17, 20, 23]
    },
    {
      id: 3,
      name: "Farah",
      email: "farah@example.com",
      role: "USER",
      cvs: [3, 6, 9, 12, 15, 18, 21, 24]
    }
  ];
  
  export const skills = [
    { id: 1, designation: "JavaScript" },
    { id: 2, designation: "TypeScript" },
    { id: 3, designation: "Kubernetes" },
    { id: 4, designation: "Figma" },
    { id: 5, designation: "PostgreSQL" }
  ];
  
  export const cvs = [
    { id: 1, name: "Lina CV 1", age: 30, job: "Frontend Developer", userId: 1, skillIds: [1, 2] },
    { id: 2, name: "Yassine CV 1", age: 27, job: "DevOps Engineer", userId: 2, skillIds: [3, 5] },
    { id: 3, name: "Farah CV 1", age: 24, job: "UI/UX Designer", userId: 3, skillIds: [4] },
    { id: 4, name: "Lina CV 2", age: 30, job: "Full Stack Developer", userId: 1, skillIds: [1, 2, 5] },
    { id: 5, name: "Yassine CV 2", age: 27, job: "Database Admin", userId: 2, skillIds: [5] },
    { id: 6, name: "Farah CV 2", age: 24, job: "Product Designer", userId: 3, skillIds: [4, 2] },
    { id: 7, name: "Lina CV 3", age: 30, job: "Mobile Developer", userId: 1, skillIds: [1] },
    { id: 8, name: "Yassine CV 3", age: 27, job: "Cloud Engineer", userId: 2, skillIds: [3] },
    { id: 9, name: "Farah CV 3", age: 24, job: "QA Tester", userId: 3, skillIds: [2, 5] },
    { id: 10, name: "Lina CV 4", age: 30, job: "Tech Lead", userId: 1, skillIds: [1, 2, 3] },
    { id: 11, name: "Yassine CV 4", age: 27, job: "Security Analyst", userId: 2, skillIds: [3] },
    { id: 12, name: "Farah CV 4", age: 24, job: "UX Researcher", userId: 3, skillIds: [4, 5] },
    { id: 13, name: "Lina CV 5", age: 30, job: "Solution Architect", userId: 1, skillIds: [3, 5] },
    { id: 14, name: "Yassine CV 5", age: 27, job: "Backend Developer", userId: 2, skillIds: [2, 5] },
    { id: 15, name: "Farah CV 5", age: 24, job: "Visual Designer", userId: 3, skillIds: [4] },
    { id: 16, name: "Lina CV 6", age: 30, job: "Systems Engineer", userId: 1, skillIds: [3, 1] },
    { id: 17, name: "Yassine CV 6", age: 27, job: "Infrastructure Engineer", userId: 2, skillIds: [3, 2] },
    { id: 18, name: "Farah CV 6", age: 24, job: "Interaction Designer", userId: 3, skillIds: [4, 1] },
    { id: 19, name: "Lina CV 7", age: 30, job: "Frontend Lead", userId: 1, skillIds: [1, 4] },
    { id: 20, name: "Yassine CV 7", age: 27, job: "Site Reliability Engineer", userId: 2, skillIds: [3, 5] },
    { id: 21, name: "Farah CV 7", age: 24, job: "Content Designer", userId: 3, skillIds: [4] },
    { id: 22, name: "Lina CV 8", age: 30, job: "Tech Manager", userId: 1, skillIds: [1, 2, 5] },
    { id: 23, name: "Yassine CV 8", age: 27, job: "Platform Engineer", userId: 2, skillIds: [3, 1] },
    { id: 24, name: "Farah CV 8", age: 24, job: "Design Systems Lead", userId: 3, skillIds: [4, 2] },
    { id: 25, name: "Lina CV 9", age: 30, job: "Innovation Engineer", userId: 1, skillIds: [2, 5] }
  ];