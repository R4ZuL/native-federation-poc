import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app.routes';
import { DataSharerService } from "data-sharer";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(ROUTES), DataSharerService]
};
