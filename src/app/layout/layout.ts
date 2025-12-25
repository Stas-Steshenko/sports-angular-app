import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { ItemsListComponent } from '../components/items-list/items-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ItemsListComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class LayoutComponent {}
