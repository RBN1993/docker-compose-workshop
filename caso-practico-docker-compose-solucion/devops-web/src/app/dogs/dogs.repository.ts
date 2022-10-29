import { Dog } from "./dog.entity";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ConfigService } from "../config/config.service";

@Injectable()
export class DogsRepository {

    constructor(private httpClient: HttpClient, private configService: ConfigService) {}

    getDogs(): Observable<Dog[]> {
        return this.httpClient.get<Dog[]>(`${this.configService.config.apiDogs}/dogs`);
    }

    saveDog(dog: Dog): Observable<Dog> {
        return this.httpClient.post<Dog>(`${this.configService.config.apiDogs}/dogs`, {name: dog.name, breed: dog.breed});
    }

}