import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSelectorsComponent } from './calendar-selectors.component';

describe('CalendarSelectorsComponent', () => {
  let component: CalendarSelectorsComponent;
  let fixture: ComponentFixture<CalendarSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarSelectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two select boxes', () => {
    const selectBoxes = document.getElementsByClassName('select-box').length;
    expect(selectBoxes).toBe(2);
  });

  it ('should have years array populated', () => {
    expect(component.years).toBeTruthy();
  });

  it ('should have months array populated', () => {
    expect(component.months).toBeTruthy();
  });
  
});
