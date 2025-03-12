import { Component, input, output } from '@angular/core';
import { CvEntry } from '@thomas-szewczyk-cv/landing/data-access';
import { MatIcon } from '@angular/material/icon';
import { DatePipe, NgClass } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatList, MatListItem, MatListItemIcon } from '@angular/material/list';
import { MatLine } from '@angular/material/core';

@Component({
  selector: 'lib-cv-entry',
  imports: [
    MatButton,
    MatIcon,
    NgClass,
    DatePipe,
    MatListItem,
    MatList,
    MatLine,
    MatListItemIcon,
  ],
  templateUrl: './cv-entry.component.html',
  styleUrls: ['./cv-entry.component.scss'],
})
export class CvEntryComponent {
  $cvEntry = input<CvEntry>();
  $isExpanded = input<boolean>(false);

  toggleDetailsEmitter = output<number>();

  onSelect(id: number): void {
    this.toggleDetailsEmitter.emit(id);
  }
}
