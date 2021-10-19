import { Component, Input } from "@angular/core";
import { BillingModel } from "src/app/models/billing-model";

@Component({
  selector: 'app-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.scss']
})

export class BillingSummaryComponent {
  private _billingData: BillingModel[];

  @Input()
  public get billingData(): BillingModel[] {
    return this._billingData;
  }
  public set billingData(v: BillingModel[]) {
    if (v) {
      this._billingData = v.slice(0, 5);
      this._billingData.map((x: BillingModel) => x.date = (new Date(<number>x.date * 1000)).toString().substring(4, 15));
    }
  }

  constructor() { }
}
