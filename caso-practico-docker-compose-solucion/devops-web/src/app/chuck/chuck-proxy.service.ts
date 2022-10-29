import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ChuckProxyService {

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  getPublicQuote(): Observable<string> {
    return this.httpClient.get(`${this.configService.config.apiChuck}/api/random-quote`, {responseType: 'text'});
  }

}
