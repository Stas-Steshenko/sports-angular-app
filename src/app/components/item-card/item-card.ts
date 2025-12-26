import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Match } from '../../shared/models/match.model';
import { TruncatePipe } from '../../shared/pipes/truncate-pipe';
import { HoverStyleDirective } from '../../shared/directives/hover-style';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterLink, TruncatePipe, HoverStyleDirective],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCardComponent {
  @Input() match!: Match;
}
