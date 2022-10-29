import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChuckModule } from './chuck/chuck.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DogsModule } from './dogs/dogs.module';

export function ConfigLoader(configService: ConfigService) {
  return () => configService.load();
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChuckModule,
    DogsModule,
    ConfigModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: ConfigLoader, deps: [ConfigService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
