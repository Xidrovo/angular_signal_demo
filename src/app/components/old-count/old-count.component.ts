import { Component } from '@angular/core';
import { ButtonComponent } from '../common/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-old-count',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './old-count.component.html',
  styleUrl: './old-count.component.scss'
})
export class OldCountComponent {
  count = 0;

  // We have 5 counters for demonstration:
  counters = [0, 0, 0, 0, 0];

  // A large list to illustrate a heavier template:
  bigList = Array.from({ length: 100000 }, (_, i) => `Item #${i}`);

  increment(index: number) {
    this.counters[index]++;
  }
}
