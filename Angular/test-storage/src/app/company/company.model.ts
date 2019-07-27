import { User } from '../user';

export interface Company {
  id: string;
  name: string;
  CIF: number;
  addres: string;
  userIds: string[];
}
