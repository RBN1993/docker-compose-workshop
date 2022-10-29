import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from '../dog';

@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(Dog) private dogsRepository: Repository<Dog>
    ) {}

    findAll(): Promise<Dog[]> {
        return this.dogsRepository.find();
    }

    save(dog: Dog): Promise<Dog> {
        return this.dogsRepository.save(dog);
    }
}
