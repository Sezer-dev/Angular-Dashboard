import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.services';
import { DataModel } from 'src/app/models/data-model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  public data: DataModel;
  constructor(private dataServices: DataService) { }

  ngOnInit(): void {
    this.dataServices.getData().subscribe((res) => {
      this.data = res;
    });
  }

  toggle(): void {
    this.data.cards.primaryCard.active = !this.data.cards.primaryCard.active;
  }
}
