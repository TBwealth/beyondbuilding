import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyfreezeComponent } from './verifyfreeze.component';

describe('VerifyfreezeComponent', () => {
  let component: VerifyfreezeComponent;
  let fixture: ComponentFixture<VerifyfreezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyfreezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyfreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
