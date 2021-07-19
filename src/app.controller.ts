import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/response/:response')
  getException(@Param('response') responseCode: string, @Res() response) {
    if (this.appService.isResponseCode(responseCode)) {
      response.status(responseCode).send();
      return;
    }
    response.status(200);
    response.write(responseCode + " is not a possible response code.");
    response.send();
  }

  @Get('/log')
  logLine(): void {
    return this.appService.logLine();
  }
}
