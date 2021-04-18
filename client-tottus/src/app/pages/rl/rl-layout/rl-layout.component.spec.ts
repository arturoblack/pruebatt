import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RlLayoutComponent } from './rl-layout.component';

describe('RlLayoutComponent', () => {
  let component: RlLayoutComponent;
  let fixture: ComponentFixture<RlLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RlLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
