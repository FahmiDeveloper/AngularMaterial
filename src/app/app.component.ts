import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' }
  ];

  onSelectCategory(category){
    this.categories
    .filter(c => c != category)
    .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }
}
