import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getName(): string {
    return "Park'Easy by Stéphanie";
  }
}
