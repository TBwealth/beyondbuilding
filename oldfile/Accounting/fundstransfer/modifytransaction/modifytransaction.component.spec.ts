import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifytransactionComponent } from './modifytransaction.component';

describe('ModifytransactionComponent', () => {
  let component: ModifytransactionComponent;
  let fixture: ComponentFixture<ModifytransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifytransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifytransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
