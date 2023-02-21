
export interface TokenModel {
  token: string;
  status: string,
  message: string,
  user: {
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
    password: string
  }
}
