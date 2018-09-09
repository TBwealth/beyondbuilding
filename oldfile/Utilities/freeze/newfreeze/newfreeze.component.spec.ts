import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfreezeComponent } from './newfreeze.component';

describe('NewfreezeComponent', () => {
  let component: NewfreezeComponent;
  let fixture: ComponentFixture<NewfreezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfreezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
