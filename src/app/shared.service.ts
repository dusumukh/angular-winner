import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  apidata : any;
  constructor(private afDb: AngularFireDatabase,) { }
  setData = (dat) =>{
this.apidata = dat;
  }
  getData = () =>
  {
    return this.apidata;
  }
}
