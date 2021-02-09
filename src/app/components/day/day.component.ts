import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/models/day.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input('day') day: Day;
  
  constructor() { }

  ngOnInit(): void {
  }

}
