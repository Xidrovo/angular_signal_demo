import { Component, computed, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalCounterComponent } from './components/signals/signal-counter.component';
import { OldCountComponent } from './components/old-count/old-count.component';
import { ButtonComponent } from "./components/common/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalCounterComponent, OldCountComponent, ButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals-demo';

  showSignalDemo: WritableSignal<boolean> = signal(true)

  textSignal = computed(() => {
    if (this.showSignalDemo()) {
      return "Show old Angular demo"
    }
    return "Show Signal demo"
  })

  toggleDemo = (): void => {
    this.showSignalDemo.update(v => !v)
  }
}
