import { NewUserModel } from "../models/new-user.model";

export interface IUsers {
  length: number;
  data: NewUserModel[];
}
