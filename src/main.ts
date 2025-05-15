import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [...appConfig],
}).catch((err) => console.error(err));
