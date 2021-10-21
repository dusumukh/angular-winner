import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toppers-page',
  templateUrl: './toppers-page.component.html',
  styleUrls: ['./toppers-page.component.css'],
})
export class ToppersPageComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Age', 'Score'];
  public apiProps: Observable<any>[];
  constructor(private afDb: AngularFireDatabase) {
    const itemsRef: AngularFireList<any> = this.afDb.list('users');
    itemsRef.valueChanges().subscribe((fire) => {
      const filterdScore = fire.filter((item) => item.Score > 90);
      this.apiProps = filterdScore;
    });
  }

  ngOnInit(): void {}
}
