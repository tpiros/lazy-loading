import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci-one',
  templateUrl: './fibonacci-one.component.html',
  styleUrls: ['./fibonacci-one.component.css']
})
export class FibonacciOneComponent implements OnInit {

  constructor() { }

  fibonacci: number;

  ngOnInit(): void {
    const fibonacci = num => {
      if (num <= 1) return 1;
      return fibonacci(num - 1) + fibonacci(num - 2);
    };
    this.fibonacci = fibonacci(42);
  }

}
