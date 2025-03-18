import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateEntry } from '@thomas-szewczyk-cv/landing/data-access';
import { MatIcon } from '@angular/material/icon';
import { ImageModalComponent } from '@thomas-szewczyk-cv/ui';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'lib-certificate-entry',
  imports: [CommonModule, MatIcon],
  templateUrl: './cv-certificate-entry.component.html',
  styleUrl: './cv-certificate-entry.component.scss',
})
export class CvCertificateEntryComponent {
  $certificate = input<CertificateEntry>();

  constructor(private dialog: MatDialog) {}

  openImage(imageUrl: string) {
    this.dialog.open(ImageModalComponent, {
      data: { imageUrl },
      width: '1200px',
    });
  }
}
