import { Body, Controller, Get, Post } from '@nestjs/common';
import { Dog } from '../dog';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {

    constructor(private dogsService: DogsService) {}

    @Get()
    findAll(): Promise<Dog[]> {
        return this.dogsService.findAll(); 
    }

    @Post()
    save(@Body() dog: Dog): Promise<Dog> {
        return this.dogsService.save(dog);
    }
}
