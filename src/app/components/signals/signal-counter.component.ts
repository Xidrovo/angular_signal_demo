import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { ButtonComponent } from '../common/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './signal-counter.component.html',
  styleUrl: './signal-counter.component.scss'
})
export class SignalCounterComponent {

  leftcounter: WritableSignal<number> = signal(0)
  rightcounter: WritableSignal<number> = signal(0)
  countersSignals = [
    signal(0),
    signal(0),
    signal(0),
    signal(0),
    signal(0)
  ];

  avarageCounter:Signal<number> = computed(() => this.leftcounter() + this.rightcounter() / 2 );

  logEffect = effect(() => {
    console.log(`avarage updated ${this.avarageCounter()}`);
  });

  leftEffect = effect(() => {
    console.log('left is changed to', this.leftcounter())
  })

  addCounter = (): void => {
    this.leftcounter.update(v => v + 1)
  }

  substractCounter = (): void => {
    this.rightcounter.update(v => v + 1)
  }

  reset = (): void => {
    this.rightcounter.set(0)
    this.leftcounter.set(0)
    this.countersSignals.forEach(counter => {
      counter.set(0);
    })
  }

  bigList = Array.from({ length: 100000 }, (_, i) => `Item #${i}`);

  incrementSignal(index: number) {
    // Update only this particular signal:
    this.countersSignals[index].update(value => value + 1);
    // Angular only re-checks what's *actually reading* each signal,
    // rather than scanning the entire component.
  }

}
