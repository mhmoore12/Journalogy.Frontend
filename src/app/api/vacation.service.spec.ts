import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { VacationService } from './vacation.service';
import {
  CreateVacationViewModel,
  EditVacationViewModel,
  IndexVacationViewModel,
} from '../data';

// Describe the test suite
describe('VacationService', () => {
  let service: VacationService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://localhost:7183/api/Vacation';

  // Initialization before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VacationService],
    });
    service = TestBed.inject(VacationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Clean up after each test
  afterEach(() => {
    httpMock.verify();
  });

  // Test for getAll
  it('should retrieve all vacations', () => {
    const mockResponse: IndexVacationViewModel[] = [
      { id: 1, name: 'Beach Vacation', location: 'Hawaii', vacationStatus: 1 },
    ];

    service.getAll(1, 10).subscribe((vacations) => {
      expect(vacations.length).toBe(1);
      expect(vacations).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(`${apiUrl}?pageIndex=1&pageSize=10`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });

  // Test for create
  it('should create a new vacation', () => {
    const mockResponse: IndexVacationViewModel = {
      id: 1,
      name: 'Beach Vacation',
      location: 'Hawaii',
      vacationStatus: 1,
    };

    const createModel: CreateVacationViewModel = {
      name: 'Beach Vacation',
      location: 'Hawaii',
      startDate: '2024-08-01',
      endDate: '2024-08-10',
      description: 'Family trip',
      vacationStatus: 1,
    };

    service.create(createModel).subscribe((vacation) => {
      expect(vacation).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(apiUrl);
    expect(request.request.method).toBe('POST');
    request.flush(mockResponse);
  });

  // Test for update
  it('should update an existing vacation', () => {
    const mockResponse: IndexVacationViewModel = {
      id: 1,
      name: 'Beach Vacation Updated',
      location: 'Hawaii',
      vacationStatus: 1,
    };

    const editModel: EditVacationViewModel = {
      id: 1,
      name: 'Beach Vacation Updated',
      location: 'Hawaii',
      startDate: '2024-08-01',
      endDate: '2024-08-10',
      description: 'Family trip',
      vacationStatus: 1,
      creatingUserId: 1,
    };

    service.update(1, editModel).subscribe((vacation) => {
      expect(vacation).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(`${apiUrl}/1`);
    expect(request.request.method).toBe('PUT');
    request.flush(mockResponse);
  });

  // Test for delete
  it('should delete a vacation', () => {
    service.delete(1).subscribe((response) => {
      expect(response).toBeNull();
    });

    const request = httpMock.expectOne(`${apiUrl}/1`);
    expect(request.request.method).toBe('DELETE');
    request.flush(null);
  });
});
