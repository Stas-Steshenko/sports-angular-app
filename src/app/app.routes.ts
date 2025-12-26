import { Routes } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list';
import { ItemDetailsComponent } from './components/item-details/item-details';
import { ItemFormComponent } from './components/item-form/item-form';

export const routes: Routes = [
  { path: 'items', component: ItemsListComponent },
  { path: 'add', component: ItemFormComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: '', redirectTo: '/items', pathMatch: 'full' }
];
