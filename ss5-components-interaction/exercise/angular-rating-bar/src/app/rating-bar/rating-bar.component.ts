import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from "../irating-unit";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit{

  max = 5;
  current = 0;


  @Output()
  rateChange = new EventEmitter<number>();

  ratingUnits: { active: boolean; value: number }[] = [];

  constructor() { }

  //Vẽ rating bar dựa trên max và current
  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max}, //tạo ra Array với length = max
      (_, index) => ({
        value: index + 1,               //tạo giá trị và active cho từng ô
        active: index < ratingValue
      }));
  }

  ngOnInit() {
    this.calculate(this.max, this.current);
    this.rateChange.emit(this.current);  //gửi giá trị current lên component cha lúc load trang

  }

  //sự kiện click
  select(index) {
    this.current = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.current);
    this.rateChange.emit(this.current);  //gửi giá trị current lên component cha
  }

  //sự kiện mouse enter
  enter(index) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }

  //sự kiện mouse leave
  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.current);
  }

}
