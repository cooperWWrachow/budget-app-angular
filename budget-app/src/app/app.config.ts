import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-7m664iv27x6sw5da.us.auth0.com',
      clientId: 'KvUApXHzhvBBriPnP0fIBzWfZxR6SNPS',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
};
