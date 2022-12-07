import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFourComponent } from './new-four.component';

describe('NewFourComponent', () => {
  let component: NewFourComponent;
  let fixture: ComponentFixture<NewFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewFourComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
