import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private messageService: MessageService) { }

  getCars(): Observable<Car[]> {
    const heroes = of(CARS);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getCar(id: number): Observable<Car> {
    const car = CARS.find(h => h.id === id)!;
    this.messageService.add('CarService: fetched cars id=${id}');
    return of(car);
  }
}
