import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.services';
import { LocationModel } from 'src/app/models/location-model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public locations: LocationModel[];
  constructor(private dataServices: DataService) { }

  ngOnInit(): void {
    this.dataServices.getData().subscribe((data) => {
      this.locations = data.locations.reverse();
      this.locations.map(x => x.enrollmentDate = (new Date(<number>x.enrollmentDate * 1000)).toString().substring(4, 15))
    });
  }

}
