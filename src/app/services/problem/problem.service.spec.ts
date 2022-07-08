import {TestBed} from '@angular/core/testing';

import {AllProblems, ParticularProblem, ProblemService} from './problem.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {backendUrl} from "../constants";

describe('ProblemService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpMock: HttpTestingController;
  let service: ProblemService;
  const allProblemsData: Array<AllProblems> = [
    {
      id: 1,
      task: "Difficult equation",
      complexity: 3,
      accepted: 10,
      attempts: 16,
    },
    {
      id: 2,
      task: "Divide apple",
      complexity: 2,
      accepted: 3,
      attempts: 4,
    }
  ];

  const firstProblemData: ParticularProblem = {
    id: 1,
    task: "Difficult equation",
    accepted: 10,
    attempts: 16,
    complexity: 3,
    images: [],
    tags: ['equations', 'sometag'],
    condition: "Solve some difficult equation",
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new ProblemService(httpClientSpy);
    service = TestBed.inject(ProblemService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('successfully retrieved all problems', () => {
    service.getAllProblems().subscribe((res) => {
      expect(res).toEqual(allProblemsData);
    });


    const req = httpMock.expectOne(backendUrl + '/problem/all/');
    expect(req.request.method).toBe('GET');
    req.flush(allProblemsData);
  });

  // getParticularProblem()
  it('successfully retrieved particular problem', () => {
    const problemId = '1'
    service.getParticularProblem(problemId).subscribe((res) => {
      expect(res).toEqual(firstProblemData);
    });


    const req = httpMock.expectOne(backendUrl + '/problem/' + problemId);
    expect(req.request.method).toBe('GET');
    req.flush(firstProblemData);
  });

  // getProblemsSortedByTags()
  it('successfully retrieved problems sorted by tags', () => {
    const ids = [1, 2];

    service.getProblemsSortedByTags(ids).subscribe((res) => {
      expect(res).toEqual(firstProblemData);
    });

    let queryParams = new HttpParams();
    queryParams = queryParams.appendAll({'tag_id': ids});

    const req = httpMock.expectOne(backendUrl + '/tags/tag?' + queryParams);
    expect(req.request.method).toBe('GET');
    req.flush(firstProblemData);
  });
});
