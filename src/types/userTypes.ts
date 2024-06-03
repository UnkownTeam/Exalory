export interface User {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  emailOtp: string;
  emailVerified: boolean;
  image: string;
  role: ROLE;
  phone: string;
  phoneOtp: string;
  phoneVerified: boolean;
  password: string;
  createdAt: string;
  updatedAt: string;
}

enum ROLE {
  "CLIENT",
  "ADMIN",
  "COMPANY",
  "MARKETER",
}
