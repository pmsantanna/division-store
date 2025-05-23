import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
];

export const appConfig = [provideRouter(routes)];
