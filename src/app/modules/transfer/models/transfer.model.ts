export interface TransferModel {
  id: string,
  amount: number,
  dateTime: number,
  reason: string,
  income: {
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
  },
  outcome: {
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
