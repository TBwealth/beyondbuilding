import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyterminalComponent } from './verifyterminal.component';

describe('VerifyterminalComponent', () => {
  let component: VerifyterminalComponent;
  let fixture: ComponentFixture<VerifyterminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyterminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
