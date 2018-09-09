import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewterminalComponent } from './newterminal.component';

describe('NewterminalComponent', () => {
  let component: NewterminalComponent;
  let fixture: ComponentFixture<NewterminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewterminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
