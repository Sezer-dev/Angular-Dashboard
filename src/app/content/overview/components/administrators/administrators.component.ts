import { Component, Input, OnInit } from '@angular/core';
import { AdministratorModel } from 'src/app/models/administrator-model';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.scss'],
})
export class AdministratorsComponent implements OnInit {
  private _administrators : AdministratorModel[];
  @Input()
  public get administrators() : AdministratorModel[] {
    return this._administrators;
  }
  public set administrators(v : AdministratorModel[]) {
    if(v){
    this._administrators = v.slice(0,5);
    }
  }


  constructor() { }
  ngOnInit(): void { }
}
