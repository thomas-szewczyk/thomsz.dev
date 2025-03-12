import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from '@thomas-szewczyk-cv/landing/about';
import { HeroSectionComponent } from '@thomas-szewczyk-cv/landing/hero';
import { SkillsSectionComponent } from '@thomas-szewczyk-cv/landing/skills';
import { CvSectionComponent } from '@thomas-szewczyk-cv/landing/cv';
import { LandingStore } from '@thomas-szewczyk-cv/landing/data-access';

@Component({
  selector: 'lib-landing',
  imports: [
    CommonModule,
    AboutSectionComponent,
    HeroSectionComponent,
    SkillsSectionComponent,
    CvSectionComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  providers: [LandingStore],
})
export class LandingComponent implements OnInit {
  store = inject(LandingStore);

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.store.loadSkillGroups('');
    this.store.loadCvEntries('');
    this.store.loadCertificates('');
  }
}
