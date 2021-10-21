import  {Injectable} from "@angular/core"
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class winnerservice {
    public apiProps: Observable<any>[];
    constructor(afDb: AngularFireDatabase) {
      const itemsRef: AngularFireList<any> = afDb.list('users');  
      itemsRef.valueChanges().subscribe((fire) => {
        this.apiProps = fire;
      });
}
