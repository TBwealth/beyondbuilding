import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyfreezeComponent } from './modifyfreeze.component';

describe('ModifyfreezeComponent', () => {
  let component: ModifyfreezeComponent;
  let fixture: ComponentFixture<ModifyfreezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyfreezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyfreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
