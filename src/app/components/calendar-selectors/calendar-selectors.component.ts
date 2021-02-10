import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-selectors',
  templateUrl: './calendar-selectors.component.html',
  styleUrls: ['./calendar-selectors.component.scss']
})
export class CalendarSelectorsComponent implements OnInit {

  @Output() datesChanged: EventEmitter<any> = new EventEmitter();
  public selectedMonth: string;
  public selectedYear: string;

  public months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public years = [];

  constructor() { }

  ngOnInit(): void {
    this.selectedMonth = moment(new Date()).month().toString();
    this.selectedYear = moment(new Date()).year().toString();
    this.populateYears();
  }

  private populateYears() {
    this.years = this.range(2000, 2050);
  }

  private range(start, end): number[] {
    return Array.from({length: (end - start)}, (v, k) => k + start);
  }

  public changeDates() {
    this.datesChanged.emit({
      month: parseInt(this.selectedMonth),
      year: parseInt(this.selectedYear)
    });
  }

}
