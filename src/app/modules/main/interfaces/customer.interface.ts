export interface CustomerInterface {
  fullName: string;
  //documentType: Enumm ;
  document: string;
  email: string;
  phone: string;
  password: string;
  avatarUrl?: string;
  birthDate: Date;
  amount: number;
}