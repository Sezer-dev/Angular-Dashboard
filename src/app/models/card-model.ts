import { BalanceModel } from "./balance-model";
import { ExpenseModel } from "./expense-model";
import { PrimaryCardModel } from "./primary-card-model";

export class CardModel {
    primaryCard: PrimaryCardModel
    expense: ExpenseModel;
    balance: BalanceModel;
}
