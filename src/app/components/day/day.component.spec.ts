import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Day } from 'src/app/models/day.model';
import * as moment from 'moment';

import { DayComponent } from './day.component';

describe('DayComponent', () => {
  let component: DayComponent;
  let fixture: ComponentFixture<DayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a day assigned', () => {
    component.day = new Day();
    component.day.date = moment(new Date());
    fixture.detectChanges();
    expect(component.day).toBeTruthy();
  });

  it('should have inspection style if its inspection day', () => {
    component.day = new Day();
    component.day.date = moment(new Date());
    component.day.inspectionAssigned = true;
    fixture.detectChanges();

    const dayElement = document.getElementsByClassName('day');

    if (component.day.inspectionAssigned) {
      if (dayElement && dayElement[0]) {
          expect(dayElement[0].classList.contains('inspection-assigned')).toBeTrue();
      }
    } else {
      if (dayElement && dayElement[0]) {
        expect(dayElement[0].classList.contains('inspection-assigned')).toBeFalse();
      }
    }
  });

  it('should have today style if its today', () => {
    component.day = new Day();
    component.day.date = moment(new Date());
    component.checkDateIsToday();
    fixture.detectChanges();

    const dayElement = document.getElementsByClassName('day');

    if (component.isToday) {
      if (dayElement && dayElement[0]) {
          expect(dayElement[0].classList.contains('current-day')).toBeTrue();
      }
    } else {
      if (dayElement && dayElement[0]) {
        expect(dayElement[0].classList.contains('current-day')).toBeFalse();
      }
    }
  });

});
