import {DateUtilService} from '../service/date-util.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {

  output = '';

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }


}
