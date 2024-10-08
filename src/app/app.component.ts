import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleFormComponent } from "./components/reactive/simple-form/simple-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'git-practice';
}
