import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyinternalaccountComponent } from './modifyinternalaccount.component';

describe('ModifyinternalaccountComponent', () => {
  let component: ModifyinternalaccountComponent;
  let fixture: ComponentFixture<ModifyinternalaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyinternalaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyinternalaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
