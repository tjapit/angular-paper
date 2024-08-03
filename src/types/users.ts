export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  address?: Address;
  phone: string;
  company?: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Column {
  header: 'Name' | 'Email' | 'Website';
  field: 'name' | 'email' | 'website';
}
