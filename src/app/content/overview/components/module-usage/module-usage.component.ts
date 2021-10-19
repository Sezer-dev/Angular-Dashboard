import { Component, Input } from '@angular/core';
import { BillingModel } from 'src/app/models/billing-model';
import { UsageModel } from 'src/app/models/usage-model';

@Component({
  selector: 'app-module-usage',
  templateUrl: './module-usage.component.html',
  styleUrls: ['./module-usage.component.scss'],
})
export class ModuleUsageComponent {
  reducedData: any;

  private _usageData: UsageModel;
  @Input()
  public get usageData(): UsageModel {
    return this._usageData;
  }
  public set usageData(v: UsageModel) {
    if (v) {
      this._usageData = v;
    }
  }

  @Input()
  public set billingData(v: BillingModel[]) {
    if (v) {
      this.reducedData = {
        exams: v.filter(x => x.service === 'Exams').reduce(((acc, y) => acc + y.amount), 0),
        monitoring: v.filter(x => x.service === 'Monitoring').reduce(((acc, y) => acc + y.amount), 0),
        applicationLibrary: v.filter(x => x.service === 'Application Library').reduce(((acc, y) => acc + y.amount), 0)
      }
    }
  }

  constructor() { }

}
