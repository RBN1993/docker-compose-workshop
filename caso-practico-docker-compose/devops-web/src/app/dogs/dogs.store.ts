import { Store } from "../store";
import { Dog } from './dog.entity';
import { DogsRepository } from './dogs.repository';
import { tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class DogsStore extends Store<Dog[]> {

    constructor(private repository: DogsRepository) {
        super();
    }

    getDogs(): Promise<Dog[]> {
        return this.repository.getDogs().pipe(
            tap(dogs => this.store(dogs))
        ).toPromise();
    }

    saveDog(dog: Dog): Promise<Dog> {
        return this.repository.saveDog(dog).pipe(
            tap(dog => this.store([...this.get(), dog]))
        ).toPromise();
    }

}