export interface CreateVacationViewModel {
  startDate: string;
  endDate: string;
  name?: string;
  location?: string;
  description?: string;
  vacationStatus: number; // Enum mapping must be provided
}