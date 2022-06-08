import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  input: string = '';
  result: string = '';

  addValue(value:string)
  {
    this.input+=value;
  }

  sovle()
  {
    let x = this.input;
    this.result = eval(x);
  }

  clear()
  {
    this.input = ""
  }

}
