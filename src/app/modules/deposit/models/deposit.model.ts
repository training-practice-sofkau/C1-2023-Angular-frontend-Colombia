
export interface DepositModel {
  id: string,
  amount: number,
  dateTime: number,
  account: {
    id: string,
    state: boolean,
    balance: number,
    customer: {
      state: boolean,
      id: string
    },
    accountType: {
      id: string,
      state: boolean
    }
  }
}