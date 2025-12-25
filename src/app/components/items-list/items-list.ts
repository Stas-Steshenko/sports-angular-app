import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card';
import { Match } from '../../shared/models/match.model';
import { DataService } from '../../shared/services/data';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FormsModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})

export class ItemsListComponent implements OnInit {
  searchTerm: string = '';

  matches: Match[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.matches = this.dataService.getItems();
  }

  get filteredMatches(): Match[] {
    const search = this.searchTerm.toLowerCase().trim();
    return this.matches.filter(m =>
      m.homeTeam.toLowerCase().includes(search) ||
      m.awayTeam.toLowerCase().includes(search)
    );
  }

  handleMatchSelect(match: Match) {
    console.log('Selected:', match);
  }
}
