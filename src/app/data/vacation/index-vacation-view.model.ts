export interface IndexVacationViewModel {
  id: number;
  name?: string;
  location?: string;
  description?: string;
  vacationStatus: number; // Enum mapping must be provided
}