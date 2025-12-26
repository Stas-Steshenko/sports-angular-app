import { Injectable } from '@angular/core';
import { Match } from '../models/match.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly initialMatches: Match[] = [
    {
      id: 1,
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      homeScore: 2,
      awayScore: 1,
      status: 'Full Time',
      matchTime: 'Finished',
      logoHome: 'https://upload.wikimedia.org/wikipedia/sco/5/53/Arsenal_FC.svg',
      logoAway: 'https://upload.wikimedia.org/wikipedia/uk/c/cc/Chelsea_FC.svg'
    },
    {
      id: 2,
      homeTeam: 'Man United',
      awayTeam: 'Man City',
      homeScore: 1,
      awayScore: 2,
      status: 'Live',
      matchTime: "75'",
      logoHome: 'https://upload.wikimedia.org/wikipedia/sco/7/7a/Manchester_United_FC_crest.svg',
      logoAway: 'https://upload.wikimedia.org/wikipedia/uk/e/eb/Manchester_City_FC_badge.svg'
    },
    {
      id: 3,
      homeTeam: 'Barcelona',
      awayTeam: 'Real Madrid',
      homeScore: 3,
      awayScore: 3,
      status: 'Full Time',
      matchTime: 'Finished',
      logoHome: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
      logoAway: 'https://upload.wikimedia.org/wikipedia/uk/5/56/Real_Madrid_CF.svg'
    },
    {
      id: 4,
      homeTeam: 'Bayern',
      awayTeam: 'Dortmund',
      homeScore: 0,
      awayScore: 0,
      status: 'Half Time',
      matchTime: 'Interval',
      logoHome: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg',
      logoAway: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg'
    }
  ];

  private matchesSubject = new BehaviorSubject<Match[]>(this.initialMatches);

  getItems(): Observable<Match[]> {
    return this.matchesSubject.asObservable();
  }

  getItemById(id: number): Match | undefined {
    return this.initialMatches.find(m => m.id === id);
  }

  filterMatches(searchTerm: string): void {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      this.matchesSubject.next(this.initialMatches);
      return;
    }

    const filtered = this.initialMatches.filter(m =>
      m.homeTeam.toLowerCase().includes(search) ||
      m.awayTeam.toLowerCase().includes(search)
    );

    this.matchesSubject.next(filtered);
  }
}
