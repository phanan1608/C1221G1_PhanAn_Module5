import { Component } from '@angular/core';
import {Countdown} from "./countdown";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rating-bar';
  //rating bar
  rating:number;
  change(event:number){
    this.rating=event;
  }


  //countdown
  countTime:Countdown=new Countdown();

  count(event: Countdown){
    this.countTime=event;
  }
}
