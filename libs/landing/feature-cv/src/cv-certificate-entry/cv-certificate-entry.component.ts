import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateEntry } from '@thomas-szewczyk-cv/landing/data-access';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-certificate-entry',
  imports: [CommonModule, MatIcon],
  templateUrl: './cv-certificate-entry.component.html',
  styleUrl: './cv-certificate-entry.component.scss',
})
export class CvCertificateEntryComponent {
  $certificate = input<CertificateEntry>();
}
