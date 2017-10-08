import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getLinks() {
    return this._http.get('/api/links')
      .map(result => this.result = result.json().data);
  }

  createLink(data: any) {
    this._http.post('/api/link', data).subscribe();
  }

}
