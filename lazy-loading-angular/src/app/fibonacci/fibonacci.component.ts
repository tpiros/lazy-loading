import { Component, OnInit } from '@angular/core';

const fibonacci = num => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};
console.log(fibonacci(42));

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

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