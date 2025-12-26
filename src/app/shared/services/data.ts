import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiUrl = 'matches';
  private allMatches: Match[] = [];
  private matchesSubject = new BehaviorSubject<Match[]>([]);

  constructor(private http: HttpClient) {
    this.refreshMatches();
  }

  getItems(): Observable<Match[]> {
    return this.matchesSubject.asObservable();
  }

  getItemById(id: string | number): Observable<Match> {
    return this.http.get<Match>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addItem(newMatch: Match): Observable<Match> {
    return this.http.post<Match>(this.apiUrl, newMatch).pipe(
      tap((addedMatch) => {
        this.allMatches = [...this.allMatches, addedMatch];
        this.matchesSubject.next(this.allMatches);
      }),
      catchError(this.handleError)
    );
  }

  refreshMatches(): void {
    this.http.get<Match[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    ).subscribe(data => {
      this.allMatches = data;
      this.matchesSubject.next(data);
    });
  }

  filterMatches(searchTerm: string): void {
    const search = searchTerm.toLowerCase().trim();
    const filtered = !search
      ? this.allMatches
      : this.allMatches.filter(m =>
        m.homeTeam.toLowerCase().includes(search) ||
        m.awayTeam.toLowerCase().includes(search)
      );
    this.matchesSubject.next(filtered);
  }

  private handleError = (error: HttpErrorResponse) => {
    const errorMessage = error.error instanceof ErrorEvent
      ? `Помилка мережі: ${error.error.message}`
      : `Сервер повернув код ${error.status}. Повідомлення: ${error.message}`;

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
