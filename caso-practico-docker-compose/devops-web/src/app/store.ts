import { BehaviorSubject, Observable } from 'rxjs';

export abstract class Store<T> {

    private state$: BehaviorSubject<T> = new BehaviorSubject<T>(undefined);

    get = (): T => this.state$.getValue();

    get$ = (): Observable<T> => this.state$.asObservable();

    store = (nextState: T) => this.state$.next(nextState);

}