export interface CreateJournalEntryParticipantViewModel {
  userId: number;
  journalEntryId: number;
  journalNotes?: string;
  review: number; // Enum mapping must be provided
}