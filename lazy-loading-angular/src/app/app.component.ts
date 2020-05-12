import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFibonacci:Boolean = false;
  showMe() {
    this.showFibonacci = !this.showFibonacci
  }
}
