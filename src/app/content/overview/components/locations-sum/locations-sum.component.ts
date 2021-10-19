import { Component } from '@angular/core';

@Component({
  selector: 'app-locations-sum',
  templateUrl: './locations-sum.component.html',
  styleUrls: ['./locations-sum.component.scss'],
})
export class LocationsSummaryComponent {
  showModal = false;
  constructor() {}
  onCloseModal(event: boolean): void {
    this.showModal = !event;
  }
}
