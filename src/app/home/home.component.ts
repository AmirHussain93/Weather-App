import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  location={
    city: 'London',
    code: 'uk'
  }

  weather:any;
  value:any;
  temp;
  temp_max;
  temp_min;

  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    this.value = localStorage.getItem('location');
    if(this.value !== null) {
      this.location = JSON.parse(this.value);
    }else{
      this.location = {
        city: 'London',
        code: 'uk'
      }
    }

    this.weatherService.getWeather(this.location.city, this.location.code).subscribe(
      response => {
        this.weather = response;
        console.log(this.weather)
        this.temp = (this.weather.list[0].main.temp- 273).toPrecision(2);
        this.temp_max = (this.weather.list[0].main.temp_max - 273).toPrecision(2);
        this.temp_min = (this.weather.list[0].main.temp_min - 273).toPrecision(2);

      },
      error => console.log(error)
    )
  }

}
