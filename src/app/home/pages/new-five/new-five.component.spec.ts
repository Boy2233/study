import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFiveComponent } from './new-five.component';

describe('NewFiveComponent', () => {
  let component: NewFiveComponent;
  let fixture: ComponentFixture<NewFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
