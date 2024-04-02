import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: any;
  product: any;
  constructor(private store: Store<any>) {
    
    
    store.select('user').subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      }
    )


    store.select('product').subscribe(
      data => {
        this.product = data;
        console.log(this.product);
      }
    )
 }

 btnUserUpdate(){
 this.store.dispatch({type:'name-edit',payload:'Bandi Vamshi Krishna'});
 this.store.dispatch({type:'mail-edit',payload:'Bandi@gmail.com'});
 this.store.dispatch({type:'mobile-edit',payload:'+91 9493736926'});
 }




}
