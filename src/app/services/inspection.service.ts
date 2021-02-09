import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  constructor() { }

  public getInspectionDays() {
    // Json MOCK data
    return [
        moment(new Date()).add(1, 'days'),
        moment(new Date()).add(5, 'days'),
        moment(new Date()).add(10, 'days'),
        moment(new Date()).add(25, 'days')
    ];
}
}
