
export interface NewUserModel {
  id: string;
  documentTypeId: string | null | undefined;
  document: string | null | undefined;
  fullName: string;
  email: string;
  phone: string | null | undefined;
  password: string | null | undefined;
  avatarUrl: string | null | undefined
}
