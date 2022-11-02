import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTwoComponent } from './new-two.component';

describe('NewTwoComponent', () => {
  let component: NewTwoComponent;
  let fixture: ComponentFixture<NewTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
