import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() fixedSize: boolean = false

  @Output() onClick = new EventEmitter<string>();

  buttonClicked() {
    this.onClick.emit();
  }
}
