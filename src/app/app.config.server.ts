import { ApplicationConfig, mergeApplicationConfig} from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch())],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);