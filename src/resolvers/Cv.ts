import { Context } from "../context";

export const Cv = {
  user: (cv: any, _args: any, { users }: Context) =>
    users.find(u => u.id === cv.userId),
  
  skills: (cv: any, _args: any, { skills }: Context) =>
    skills.filter(s => cv.skillIds.includes(s.id)),
};