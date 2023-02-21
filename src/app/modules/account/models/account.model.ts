
export interface AccountModel {
    id: string,
    state: boolean,
    balance: number,
    customer: {
      state: boolean,
      id: number
    },
    accountType: {
      id: string,
      state: boolean
    }
}
