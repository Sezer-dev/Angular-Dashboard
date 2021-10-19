import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/models/data-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = '/assets/data';
  constructor(private http: HttpClient) { }

  getData(): Observable<DataModel> {
    return this.http.get<DataModel>(this.baseUrl + '/data.json');
  }
}
