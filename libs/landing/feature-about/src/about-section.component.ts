import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { SocialLogosComponent } from '@thomas-szewczyk-cv/ui';

@Component({
  selector: 'lib-landing-about',
  imports: [MatCard, MatCardContent, SocialLogosComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {}
