import { SafeNote } from '@prisma/client';

export type ISafeNoteData = Omit<SafeNote, 'id'>;