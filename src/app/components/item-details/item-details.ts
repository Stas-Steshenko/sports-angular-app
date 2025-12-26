import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../shared/services/data';
import { Match } from '../../shared/models/match.model';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetailsComponent implements OnInit {
  match: Match | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const idFromUrl = this.route.snapshot.paramMap.get('id');

    if (idFromUrl) {
      const id = Number(idFromUrl);

      this.match = this.dataService.getItemById(id);
    }
  }
}
