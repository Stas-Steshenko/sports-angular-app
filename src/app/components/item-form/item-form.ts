import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data';
import { Match } from '../../shared/models/match.model';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css',
})
export class ItemFormComponent implements OnInit {
  itemForm!: FormGroup;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      homeTeam: new FormControl('', [Validators.required, Validators.minLength(3)]),
      awayTeam: new FormControl('', [Validators.required, Validators.minLength(3)]),

      homeScore: new FormControl(0, [Validators.required, Validators.min(0)]),
      awayScore: new FormControl(0, [Validators.required, Validators.min(0)]),

      matchTime: new FormControl('', Validators.required),
      status: new FormControl('Scheduled', Validators.required),

      logoHome: new FormControl('', Validators.required),
      logoAway: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      const newMatch: Match = {
        ...this.itemForm.value,
        id: Date.now()
      };

      this.dataService.addItem(newMatch);

      console.log('Матч успішно додано:', newMatch);
      this.router.navigate(['/items']);

    } else {
      console.error('Помилка: Форма заповнена некоректно');
      this.itemForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.router.navigate(['/items']);
  }
}
