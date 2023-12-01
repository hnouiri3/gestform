import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  
  getRandomNumbers(count: number): number[] {
    const randomNumbers: number[] = [];
    for (let i = 0; i < count; i++) {
      randomNumbers.push(this.getRandomInt(-1000, 1000));
    }
    return randomNumbers;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
