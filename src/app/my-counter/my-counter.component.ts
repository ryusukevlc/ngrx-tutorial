import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select("count");
  }

  public increment() {
    this.store.dispatch(CounterActions.increment());
  }

  public decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  public reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
