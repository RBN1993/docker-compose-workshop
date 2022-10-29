import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dog } from './dog.entity';
import { DogsStore } from './dogs.store';

@Component({
    selector: 'app-dogs',
    template: `
        <form [formGroup]="dogForm">
            <div>
                <label for="name">Name: </label>
                <input id="name" formControlName="name">
            </div>
            <div>
                <label for="breed">Breed: </label>
                <input id="breed" formControlName="breed">
            </div>
            <div>
                <button id="send" (click)="onSend()">Send</button>
            </div>
        </form>
        <div *ngIf="vm$ | async as vm">
            <div *ngFor="let dog of vm.dogs">
               <span>{{dog.id}}</span> -- <span>{{dog.name}}</span> -- <span>{{dog.breed}}</span>    
            </div>
        </div>
        
    `
})
export class DogsComponent implements OnInit {

    vm$ = combineLatest([this.store.get$()]).pipe(
        map(([dogs]) => ({dogs}))
    )

    dogForm: FormGroup = new FormGroup({
        name: new FormControl(''),
        breed: new FormControl('')
    });

    constructor(private store: DogsStore) {}

    async ngOnInit() {
        this.store.getDogs();
    }

    async onSend() {
        console.log(this.dogForm.value);
       const dog: Dog = {
        breed: this.dogForm.get('breed').value,
        name: this.dogForm.get('name').value
       }

       console.log(JSON.stringify(dog));

       this.store.saveDog(dog);

    }

}