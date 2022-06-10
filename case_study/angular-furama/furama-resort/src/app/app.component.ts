import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'furama-resort';

  cssUrl: string;

  constructor(public sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const n = randomIntegerInRange(1, 100) % 2;
    this.cssUrl = n % 2 === 0 ? '/assets/styles1.css' : '/assets/styles2.css';
  }
}
