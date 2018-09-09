import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinvestmentComponent } from './newinvestment.component';

describe('NewinvestmentComponent', () => {
  let component: NewinvestmentComponent;
  let fixture: ComponentFixture<NewinvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
