export interface EditJournalEntryParticipantViewModel {
  id: number;
  userId: number;
  journalEntryId: number;
  journalNotes?: string;
  review: number; // Enum mapping must be provided
}