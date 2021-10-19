import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public showModal = false;
  public data: {
    header: string;
    description: string;
    canAdd: boolean;
  };
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.data = <any>data.state.root.firstChild.data;
      }
    });
  }
  onCloseModal(event: boolean): void {
    this.showModal = !event;
  }
}
