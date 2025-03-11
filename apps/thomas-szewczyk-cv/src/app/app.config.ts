import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideMarkdown } from 'ngx-markdown';
import { provideHttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '@thomas-szewczyk-cv/core/tokens';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideMarkdown(),
    {
      provide: APP_CONFIG,
      useValue: <AppConfig>{
        apiUrl: environment.apiUrl,
        endpoints: environment.endpoints,
      },
    },
  ],
};
