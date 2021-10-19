import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel } from 'src/app/models/card-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Output() public toggle = new EventEmitter();
  @Input() public cardData: CardModel

  constructor() { }

  ngOnInit(): void { }

  switchStatus(event: MouseEvent): void {
    this.toggle.emit(event);
  }
}
