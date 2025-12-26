import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card';
import { Match } from '../../shared/models/match.model';
import { DataService } from '../../shared/services/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FormsModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsListComponent implements OnInit, OnDestroy {
  searchTerm: string = '';
  matches: Match[] = [];

  private dataSubscription?: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataSubscription = this.dataService.getItems().subscribe({
      next: (data: Match[]) => {
        this.matches = data;
        console.log('Дані оновлено в компоненті:', data);
      },
      error: (err) => console.error('Помилка отримання даних:', err)
    });
  }

  onSearchChange(): void {
    this.dataService.filterMatches(this.searchTerm);
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
      console.log('Відписка виконана успішно');
    }
  }
}
