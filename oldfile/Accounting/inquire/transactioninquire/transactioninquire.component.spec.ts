import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactioninquireComponent } from './transactioninquire.component';

describe('TransactioninquireComponent', () => {
  let component: TransactioninquireComponent;
  let fixture: ComponentFixture<TransactioninquireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactioninquireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactioninquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
