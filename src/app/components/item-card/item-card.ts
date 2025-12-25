import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Match } from '../../shared/models/match.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCardComponent {
  @Input() match!: Match;
}
