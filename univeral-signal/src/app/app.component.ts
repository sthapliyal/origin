import { Component } from '@angular/core';
import { SignalsComponent } from './signals/signals.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[SignalsComponent]
})
export class AppComponent {
  title = 'univeral-signal';
}
