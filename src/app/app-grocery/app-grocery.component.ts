import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery.component',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})
export class GroceryComponent {
  task: any;
  tasks = [];
  onClick(){
    task: {name: String}
  this.task = '';
  }
}

