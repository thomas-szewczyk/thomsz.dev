import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  imports: [RouterModule, NavbarComponent, FooterComponent, MatDivider],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'thomas-szewczyk-cv';
}
