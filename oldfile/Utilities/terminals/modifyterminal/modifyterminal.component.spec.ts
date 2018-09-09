import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyterminalComponent } from './modifyterminal.component';

describe('ModifyterminalComponent', () => {
  let component: ModifyterminalComponent;
  let fixture: ComponentFixture<ModifyterminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyterminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
