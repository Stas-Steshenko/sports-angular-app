export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: string;
  matchTime: string;
  logoHome?: string;
  logoAway?: string;
}
