export interface EditUserViewModel {
  id: number;
  firstName?: string;
  lastName?: string;
  dateOfBirth: string;
  gender: number; // Enum mapping must be provided
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  googleUserId?: string;
}