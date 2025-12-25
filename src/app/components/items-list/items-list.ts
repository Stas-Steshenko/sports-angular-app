import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Match } from '../../shared/models/match.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsListComponent {
  matches: Match[] = [
    {
      id: 1,
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      homeScore: 2,
      awayScore: 1,
      status: 'Full Time',
      matchTime: 'Finished'
    },
    {
      id: 2,
      homeTeam: 'Man United',
      awayTeam: 'Man City',
      homeScore: 1,
      awayScore: 2,
      status: 'Live',
      matchTime: "75'"
    },
    {
      id: 3,
      homeTeam: 'Barcelona',
      awayTeam: 'Real Madrid',
      homeScore: 3,
      awayScore: 3,
      status: 'Full Time',
      matchTime: 'Finished'
    },
    {
      id: 4,
      homeTeam: 'Bayern',
      awayTeam: 'Dortmund',
      homeScore: 0,
      awayScore: 0,
      status: 'Half Time',
      matchTime: 'Interval'
    }
  ];
}
