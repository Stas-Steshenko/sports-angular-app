import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ItemCardComponent } from '../item-card/item-card';
import { Match } from '../../shared/models/match.model';
import { DataService } from '../../shared/services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FormsModule, RouterLink],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsListComponent implements OnInit {
  searchTerm: string = '';

  matches$: Observable<Match[]> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.matches$ = this.dataService.getItems();
  }

  onSearchChange(): void {
    this.dataService.filterMatches(this.searchTerm);
  }
}
