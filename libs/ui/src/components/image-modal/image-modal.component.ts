import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-image-modal',
  imports: [CommonModule],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss',
})
export class ImageModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string; imageAlt: string }
  ) {}
}
