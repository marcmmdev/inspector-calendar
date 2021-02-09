import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/models/day.model';
import * as moment from 'moment';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input('day') day: Day;
  public isToday: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.checkDateIsToday();
  }
  
  public checkDateIsToday() {
    const auxDate = moment(new Date());
    if (this.day.date.format('DD/MM/YYYY') === auxDate.format('DD/MM/YYYY')) {
      this.isToday = true;
    }
  }

}
