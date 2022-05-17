import {TestBed} from '@angular/core/testing';
import {AuthService, EmailLoginRequestData, AccessRefreshTokens, UsernameLoginRequestData} from './auth.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {of} from "rxjs";
import {backendUrl, httpOptions} from "../constants";

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpMock: HttpTestingController;

  // let urlDomain: string = 'http://127.0.0.1:8000';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy);
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const successfulLogin: AccessRefreshTokens = {
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDEwODIzMywianRpIjoiN2FmYTI4OGEwYjcxNDgwNmJkNTAwZTEwNmZhYjM4YWYiLCJ1c2VyX2lkIjozLCJmdWxsX25hbWUiOiJmaXJzdF9uYW1lIGxhc3RfbmFtZSIsInVzZXJuYW1lIjoidXNlcm5hbWUifQ.QjFfh8pYUbpfRjogBEzqnG6xkWKKfBvUIqVbmOp3atw",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyODE1ODMzLCJqdGkiOiI3NDhhMTkwYWQ0ZWU0MTJiYWRlOWM0ZTI1YTU2NDRhMCIsInVzZXJfaWQiOjMsImZ1bGxfbmFtZSI6ImZpcnN0X25hbWUgbGFzdF9uYW1lIiwidXNlcm5hbWUiOiJ1c2VybmFtZSJ9.aAGV_w92MwdmeFrPBitJTWj9Fc9HkKpeZ5OYa1mUJJs"
  };

  const successfulRegistration: object = {
    email: "email@gmail.com",
    username: "username",
    first_name: "first",
    last_name: "last"
  };

  const successfulAccountActivation: object = of({
    email: "email@gmail.com",
    username: "username",
    first_name: "first",
    last_name: "last"
  });

  // login()
  it('successful username login()', () => {
    const usernameLoginRequest: UsernameLoginRequestData = {username: "username", password: "password"};
    service.login(usernameLoginRequest).subscribe((res) => {
      expect(res).toEqual(successfulLogin);
    });


    const req = httpMock.expectOne(backendUrl + '/auth/users/login/');
    expect(req.request.method).toBe('POST');
    req.flush(successfulLogin);
  });

  it('successful email login()', () => {
    const emailLoginRequest: EmailLoginRequestData = {email: "email@gmail.com", password: "password"};
    service.login(emailLoginRequest).subscribe((res) => {
      expect(res).toEqual(successfulLogin);
    });


    const req = httpMock.expectOne(backendUrl + '/auth/users/login/');
    expect(req.request.method).toBe('POST');
    req.flush(successfulLogin);
  });

  // register()
  it('successful register()', () => {
    const registrationRequest = {
      email: "email@gmail.com",
      username: "username",
      first_name: "first",
      last_name: "last",
      password: "password"
    }

    service.register(registrationRequest).subscribe((res) => {
      expect(res).toEqual(successfulRegistration);
    });

    const req = httpMock.expectOne(backendUrl + '/auth/users/');

    expect(req.request.method).toBe('POST');
    req.flush(successfulRegistration);
  });

  // activateAccount()
  it('successful account activation', () => {
    const accountActivation = {
      uid: 'someUid', token: 'someToken'
    }

    service.activateAccount(accountActivation).subscribe((res) => {
      expect(res).toEqual(successfulAccountActivation)
      // expect(res).toEqual(successfulAccountActivation);
    });

    const req = httpMock.expectOne(backendUrl + '/auth/users/activation/');
    expect(req.request.method).toBe('POST');
  });

  // refreshToken()
  it('successful refresh token', () => {
    const refreshToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDEwODIzMywianRpIjoiN2FmYTI4OGEwYjcxNDgwNmJkNTAwZTEwNmZhYjM4YWYiLCJ1c2VyX2lkIjozLCJmdWxsX25hbWUiOiJmaXJzdF9uYW1lIGxhc3RfbmFtZSIsInVzZXJuYW1lIjoidXNlcm5hbWUifQ.QjFfh8pYUbpfRjogBEzqnG6xkWKKfBvUIqVbmOp3atw';

    service.refreshToken(refreshToken).subscribe((res) => {
      expect(res).toEqual(successfulLogin)
    });

    const req = httpMock.expectOne(backendUrl + '/auth/users/refresh/');
    expect(req.request.method).toBe('POST');
  });

  // logout()
  it('successful logout', () => {
    const refreshToken = {'refresh': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDEwODIzMywianRpIjoiN2FmYTI4OGEwYjcxNDgwNmJkNTAwZTEwNmZhYjM4YWYiLCJ1c2VyX2lkIjozLCJmdWxsX25hbWUiOiJmaXJzdF9uYW1lIGxhc3RfbmFtZSIsInVzZXJuYW1lIjoidXNlcm5hbWUifQ.QjFfh8pYUbpfRjogBEzqnG6xkWKKfBvUIqVbmOp3atw'};
    const successfulLogOut = {
      "message": "Success"
    }
    service.logout(refreshToken).subscribe((res) => {
      expect(res).toEqual(successfulLogOut)
    });

    const req = httpMock.expectOne(backendUrl + '/auth/users/logout/');
    expect(req.request.method).toBe('POST');
  });
});
