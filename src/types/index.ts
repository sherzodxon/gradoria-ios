export interface User {
  id: number;
  name: string;
  surname: string;
  username: string;
  role: 'TEACHER' | 'STUDENT' | 'ADMIN';
  totalPoints?: number;
}

export interface RuleItem {
  article: number;
  mod: number;
  description: string;
  points: number;
}

export interface RuleBand {
  band: number;
  title: string;
  items: RuleItem[];
}

export interface Constitution {
  rules: {
    positive: RuleBand[];
    negative: RuleBand[];
  };
}

export interface GivePointPayload {
  studentId: number;
  points: number;
  band: number;
  article: number;
  description: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
