import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifytransactionComponent } from './verifytransaction.component';

describe('VerifytransactionComponent', () => {
  let component: VerifytransactionComponent;
  let fixture: ComponentFixture<VerifytransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifytransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifytransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
