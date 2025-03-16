import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ScrollToDirective } from '@thomas-szewczyk-cv/shared';

@Component({
  selector: 'lib-hero-section',
  imports: [MatButton, ScrollToDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  welcomeHeader = 'Hallo! 👋 Ich bin';
  name = 'Thomas Szewczyk';
  subHeader = 'Web Developer | Best Practices Enthusiast | Team Player';
}
