export interface Phonebook {
  id: string;
  number: number;
  firstName: string;
  lastName?: string | null;
  DOB?: string | null;
  email?: string | null;
}
