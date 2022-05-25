export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'custumer' | 'admin';
}

export interface CreateUserDTO extends Omit<User, 'id'> {}
