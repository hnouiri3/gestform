import { Component } from '@angular/core';
import { NumbersService } from '../../services/numbers.service';

@Component({
  selector: 'app-gest-form',
  standalone: true,
  imports: [],
  templateUrl: './gest-form.component.html',
  styleUrl: './gest-form.component.css'
})
export class GestFormComponent {
  numbers: number[] = [];

  constructor(private numberService: NumbersService) {}

  generateRandomNumbers() {
    // J'ai ajusté le nombre des entiers affichés à 50.
      this.numbers = this.numberService.getRandomNumbers(50);
  }
  processNumbers(number: number): string {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'Gestform';
    } else if (number % 3 === 0) {
      return 'Geste';
    } else if (number % 5 === 0) {
      return 'Forme';
    } else {
      return number.toString();
    }
  }
}
