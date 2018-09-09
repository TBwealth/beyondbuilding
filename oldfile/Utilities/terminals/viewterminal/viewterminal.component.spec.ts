import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewterminalComponent } from './viewterminal.component';

describe('ViewterminalComponent', () => {
  let component: ViewterminalComponent;
  let fixture: ComponentFixture<ViewterminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewterminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
