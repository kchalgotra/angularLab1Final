import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


  selectedCar?: Car;
  cars: Car[] = [];
  
  
  

  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCars()
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
    this.messageService.add(`HeroesComponent: Selected hero id=${car.id}`);
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }

}
