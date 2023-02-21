export interface getUserModel {
  id: string,
  state: boolean,
  documentType: {
      id: string,
      state: boolean
  },
  document: string,
  fullName: string,
  email: string,
  phone: string,
  password: string,
  avatarUrl: string
}