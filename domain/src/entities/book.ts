export type Status = 'available' | 'checked_out' | 'reserved';

export interface Book {
  id: string;
  title: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}