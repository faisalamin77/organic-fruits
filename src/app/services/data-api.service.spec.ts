import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment.prod';
import { FEATURED_PLAYLISTS } from './api-resources';
import { DataApiService } from './data-api.service';
import * as sampleData from './sample-data';

const baseUrl = environment.BASE_URL;

describe('DataApiService', () => {
  let service: DataApiService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataApiService]
    }).compileComponents();

    service = TestBed.inject(DataApiService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve featured playlists via get', () => {
    service.getFeaturedPlaylist()
      .subscribe(data => {
        expect(data).toEqual(sampleData.data);
      });

    const url = `${baseUrl}/${FEATURED_PLAYLISTS}`;
    const request = httpMock.expectOne(`${url}`);
    expect(request.request.method).toBe('GET');

    request.flush(sampleData.data);
  });

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';
    const testUrl = baseUrl;

    httpClient.get(testUrl)
      .subscribe(
        data => fail('should have failed with the 404 error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404, 'status');
          expect(error.error).toEqual(emsg, 'message');
        }
      );

    const req = httpMock.expectOne(testUrl);

    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });
});
