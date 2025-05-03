import { Context } from "../context";

export const Query = {
  cvs: (_parent: any, _args: any, { cvs }: Context) => cvs,
  
  cv: (_parent: any, { id }: { id: string }, { cvs }: Context) =>
    cvs.find(cv => cv.id === +id),

};