import { NewUserModel } from "../models/new-user.model";

export interface INewUser {
  success: boolean;
  data: NewUserModel;
}