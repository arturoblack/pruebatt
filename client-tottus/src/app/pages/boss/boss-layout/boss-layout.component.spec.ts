import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossLayoutComponent } from './boss-layout.component';

describe('BossLayoutComponent', () => {
  let component: BossLayoutComponent;
  let fixture: ComponentFixture<BossLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
