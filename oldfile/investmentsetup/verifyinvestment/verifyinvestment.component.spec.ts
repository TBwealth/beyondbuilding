import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyinvestmentComponent } from './verifyinvestment.component';

describe('VerifyinvestmentComponent', () => {
  let component: VerifyinvestmentComponent;
  let fixture: ComponentFixture<VerifyinvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyinvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyinvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
