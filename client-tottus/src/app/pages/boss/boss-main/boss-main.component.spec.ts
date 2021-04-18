import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossMainComponent } from './boss-main.component';

describe('BossMainComponent', () => {
  let component: BossMainComponent;
  let fixture: ComponentFixture<BossMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
