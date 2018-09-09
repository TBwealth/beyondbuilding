import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezestatusComponent } from './freezestatus.component';

describe('FreezestatusComponent', () => {
  let component: FreezestatusComponent;
  let fixture: ComponentFixture<FreezestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
