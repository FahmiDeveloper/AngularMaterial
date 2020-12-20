import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading = false;

  obsTimer: Observable<number> = timer(5000);

  constructor() {
    this.isLoading = true;
    this.obsTimer.subscribe(x => this.isLoading = false);
  }
}
