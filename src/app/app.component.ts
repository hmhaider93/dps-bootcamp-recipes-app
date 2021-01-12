import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Cook Book';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/recipies', icon: 'view_list', title: 'Edit Recipies' },
  ];

  constructor(){}

  // constructor(private db: AngularFirestore) {
  //   const things = db.collection('things').valueChanges();
  //     things.subscribe(console.log);
  // }
}
