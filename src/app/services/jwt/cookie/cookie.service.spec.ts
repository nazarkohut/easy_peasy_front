import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CookieService', () => {
  let service: CookieService;
  // const dummy
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('', () => {
    // expect(service).toBe();
  })
});
