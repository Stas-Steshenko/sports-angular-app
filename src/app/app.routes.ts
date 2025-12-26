import { Routes } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list';
import { ItemDetailsComponent } from './components/item-details/item-details';
import { ItemFormComponent } from './components/item-form/item-form';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
  { path: 'items', component: ItemsListComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'add',
    component: ItemFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'edit/:id',
    component: ItemFormComponent,
    canActivate: [authGuard]
  },

  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: '**', redirectTo: '/items' }
];
