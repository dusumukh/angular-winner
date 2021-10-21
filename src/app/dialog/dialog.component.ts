import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  notes_Firebase_Data: AngularFireList<any>;
  notes_angular: Observable<any[]>;
  apiData: any;
  constructor(
    private shared: SharedService,
    private afDb: AngularFireDatabase
  ) {}

  ngOnInit(): void {
    this.apiData = this.shared.getData();
    console.log(this.apiData);
    this.notes_Firebase_Data = this.afDb.list('winners');
    this.notes_angular = this.notes_Firebase_Data.valueChanges();
  }
  mySortingFunction = (a, b) => {
    return a.key > b.key ? -1 : 1;
  };
  onConfirm = () => {
    this.notes_Firebase_Data.push(this.apiData);
  };
}
