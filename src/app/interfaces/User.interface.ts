export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
    createdAt: string;
  }