import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Car[] = [];
  cars: Car[] | undefined;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars.slice(1, 5));
  }

}
