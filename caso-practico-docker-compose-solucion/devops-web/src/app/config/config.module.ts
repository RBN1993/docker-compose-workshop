import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from "./config.service";
import { ConfigRepository } from "./config.repository";

@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [ConfigService, ConfigRepository]
})
export class ConfigModule {

}