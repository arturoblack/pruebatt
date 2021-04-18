import { TestBed } from '@angular/core/testing';

import { IsBossGuard } from './is-boss.guard';

describe('IsBossGuard', () => {
  let guard: IsBossGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsBossGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
