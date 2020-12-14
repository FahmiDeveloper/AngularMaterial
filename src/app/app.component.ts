import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterial';

  minDate = new Date(2020, 12, 1);
  maxDate = new Date(2020, 12, 15);
}
