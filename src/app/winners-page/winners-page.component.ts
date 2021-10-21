import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-winners-page',
  templateUrl: './winners-page.component.html',
  styleUrls: ['./winners-page.component.css'],
})
export class WinnersPageComponent implements OnInit {
  displayedColumns: string[] = ['Name','Age', 'Score'];
  public apiProps: Observable<any>[];
  constructor(private afDb: AngularFireDatabase) {
    const itemsRef: AngularFireList<any> = this.afDb.list('winners');
    itemsRef.valueChanges().subscribe((fire) => {
      this.apiProps = fire;
    });
  }

  ngOnInit(): void {}
}
