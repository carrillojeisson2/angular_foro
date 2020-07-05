// Importar los modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './app/services/user.guard';
import { NoIdentityGuard } from './app/services/no.identity.guard';

// Importar componentes

import { HomeComponent } from './app/components/home/home.component';
import { LoginComponent } from './app/components/login/login.component';
import { RegisterComponent } from './app/components/register/register.component';
import { UserEditComponent } from './app/components/user-edit/user-edit.component';
import { TopicsComponent } from './app/components/topics/topics.component';
import { TopicDetailComponent } from './app/components/topic-detail/topic-detail.component';
import { UsersComponent } from './app/components/users/users.component';
import { ProfileComponent } from './app/components/profile/profile.component';
import { SearchComponent } from './app/components/search/search.component';

// Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'login', canActivate: [NoIdentityGuard], component: LoginComponent },
  {
    path: 'registro',
    canActivate: [NoIdentityGuard],
    component: RegisterComponent,
  },
  { path: 'ajustes', canActivate: [UserGuard], component: UserEditComponent },
  { path: 'temas', component: TopicsComponent },
  { path: 'temas/:page', component: TopicsComponent },
  { path: 'tema/:id', component: TopicDetailComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'perfil/:id', component: ProfileComponent },
  { path: 'buscar/:search', component: SearchComponent },
  { path: '**', component: HomeComponent },
];

// Exportar configuracion
export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
