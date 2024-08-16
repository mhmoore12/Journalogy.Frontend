export interface EditVacationViewModel {
  id: number;
  startDate: string;
  endDate: string;
  creatingUserId: number;
  name?: string;
  location?: string;
  description?: string;
  vacationStatus: number; // Enum mapping must be provided
}