import { Injectable } from '@angular/core';
import { Config } from './config';

import { ConfigRepository } from './config.repository';

@Injectable()
export class ConfigService {

  config: Config;

  constructor(private repository: ConfigRepository) { }

  load(): Promise<void> {
    return new Promise((resolve) => {
      this.repository.getConfig().subscribe(
        (config: Config) => {
          this.config = config;
          resolve();
        }
      );
    });
  }

}