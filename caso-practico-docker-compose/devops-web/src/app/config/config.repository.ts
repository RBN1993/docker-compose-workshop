import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Config } from "./config";

@Injectable()
export class ConfigRepository {

  constructor(private httpClient: HttpClient) { }

  getConfig(): Observable<Config> {
    return this.httpClient.get<Config>(`${environment.configFile}`);
  }

}