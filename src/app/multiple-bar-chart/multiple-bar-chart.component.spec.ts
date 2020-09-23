import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleBarChartComponent } from './multiple-bar-chart.component';

describe('MultipleBarChartComponent', () => {
  let component: MultipleBarChartComponent;
  let fixture: ComponentFixture<MultipleBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
