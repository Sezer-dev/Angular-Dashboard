import { AdministratorModel } from "./administrator-model";
import { BillingModel } from "./billing-model";
import { CardModel } from "./card-model";
import { LocationModel } from "./location-model";
import { UsageModel } from "./usage-model";

export class DataModel {
    cards: CardModel;
    billing: BillingModel[];
    locations: LocationModel[];
    usage: UsageModel;
    administrators: AdministratorModel[];
}
