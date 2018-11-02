import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '1537976a640b99978c05a7fff1579ec4';
  url;

  constructor(private _http : HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q='
  }

  getWeather (city, code){
    return this._http.get<any>(this.url+city+','+code+'&APPID='+this.apiKey)
  }
}
