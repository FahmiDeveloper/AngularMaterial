import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterial';

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  Colors = [
    { id: 1, name: 'Red'},
    { id: 2, name: 'Yellow'},
    { id: 3, name: 'Green'}
  ];

  col = 2;

  defaultFood = 'steak-0';
}
