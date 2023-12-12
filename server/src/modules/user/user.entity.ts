export class UserEntity {
  id: number;
  email: string;
  password: string;
}

export class UserRO {
  id: number;
  email: string;
  token: string;
}
