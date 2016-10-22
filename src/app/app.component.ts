import { Component } from '@angular/core';
import { FirebaseListComponent } from './firebase-list/firebase-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseListComponent]
})
export class AppComponent {
  title = 'app works!';
}
