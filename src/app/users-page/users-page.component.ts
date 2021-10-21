import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { SharedService } from '../shared.service';

export interface PeriodicElement {
  Name: string;
  Age: number;
  Score: number;
}
const filter = [];

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  notes_Firebase_Data: AngularFireList<any>;
  notes_angular: Observable<any[]>;
  displayedColumns: string[] = ['Id', 'Name', 'Age', 'Score', 'Add'];
  scorefilter: any;
  public apiProps: Observable<any>[];

  constructor(private afDb: AngularFireDatabase, private dialog: MatDialog ,private shared : SharedService) {}

  ngOnInit(): void {
    const itemsRef: AngularFireList<any> = this.afDb.list('users');
    itemsRef.valueChanges().subscribe((fire) => {
      const filter21 = fire.filter((data) => data.Age <= 21);
      this.scorefilter = filter21;
      this.apiProps = filter21;
    });
  }
  onCheck = (data) => {
 this.shared.setData(data);
    this.dialog.open(DialogComponent);
  };
  onChange = ($event: any) => {
    if ($event.value === 'two') {
      const values80 = this.scorefilter.filter((items) => items.Score < 90);
      console.log(values80);
      this.apiProps = values80;
    } else if($event.value === "one"){
      const values90 = this.scorefilter.filter((items) => items.Score > 90);
      console.log(values90);
      this.apiProps = values90;
    }
    else{
      this.apiProps = this.scorefilter
    }

  };
}
