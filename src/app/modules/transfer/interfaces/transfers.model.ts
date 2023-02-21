import { TransferModel } from '../models/transfer.model';

export interface INewTransfers {
  success: boolean;
  data: TransferModel;
}