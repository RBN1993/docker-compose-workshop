import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './dog';
import { DogsService } from './dogs/dogs.service';
import { DogsController } from './dogs/dogs.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Dog])],
    providers: [DogsService],
    controllers: [DogsController]
})
export class DogsModule {
    
}
