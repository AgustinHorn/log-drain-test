import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getException(): string {
    throw new Error('Required');  // generates an error object with the message of Required
  }

  logLine(): void {
    console.log("This is a log line test");
  }
}
