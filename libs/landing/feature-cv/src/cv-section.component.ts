import { Component, computed, inject, Signal, signal } from '@angular/core';
import {
  CertificateEntry,
  CvEntry,
  LandingStore,
} from '@thomas-szewczyk-cv/landing/data-access';
import { CvEntryComponent } from './cv-entry/cv-entry.component';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CvCertificateEntryComponent } from './cv-certificate-entry/cv-certificate-entry.component';

@Component({
  selector: 'lib-landing-cv',
  imports: [
    CvEntryComponent,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatDivider,
    MatTabGroup,
    MatTab,
    CvCertificateEntryComponent,
  ],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.scss',
})
export class CvSectionComponent {
  title = 'Lebenslauf';

  $store = inject(LandingStore);
  $selectedEntryId = signal<number>(-1);
  $cvEntries: Signal<CvEntry[]> = this.$store.cvEntries;
  $certificates: Signal<CertificateEntry[]> = this.$store.certificates;

  $cvJobEntries = computed(() => {
    return this.$cvEntries().filter((entry) => !entry.isEducation);
  });

  $cvEducationEntries = computed(() => {
    return this.$cvEntries().filter((entry) => entry.isEducation);
  });

  toggleDetails(entryId: number): void {
    this.$selectedEntryId.update((current) =>
      current === entryId ? -1 : entryId
    );
  }
}
