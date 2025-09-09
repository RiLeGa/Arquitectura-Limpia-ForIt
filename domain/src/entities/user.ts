export type Status = 'active' | 'inactive' | 'banned';

export interface User {
  id: string;
  name: string;
  email: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}