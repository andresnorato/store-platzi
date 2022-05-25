import { TestBed } from '@angular/core/testing';

import { ExitGuard } from './exit.guard';

describe('ExistGuard', () => {
  let guard: ExitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
