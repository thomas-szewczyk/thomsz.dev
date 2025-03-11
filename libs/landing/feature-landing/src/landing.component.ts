import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from '@thomas-szewczyk-cv/landing/about';
import { HeroSectionComponent } from '@thomas-szewczyk-cv/landing/hero';
import { SkillsSectionComponent } from '@thomas-szewczyk-cv/landing/skills';

@Component({
  selector: 'lib-landing',
  imports: [
    CommonModule,
    AboutSectionComponent,
    HeroSectionComponent,
    SkillsSectionComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {}
