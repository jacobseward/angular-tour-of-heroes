import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {Child} from './child';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChildService {

  private childrenUrl = 'api/children';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getChildren(): Promise<Child[]> {
    return this.http.get(this.childrenUrl)
               .toPromise()
               .then(response => response.json().data as Child[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
