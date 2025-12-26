import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data';
import { Match } from '../../shared/models/match.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetailsComponent implements OnInit {
  match$!: Observable<Match>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.match$ = this.dataService.getItemById(id);
    }
  }
}
