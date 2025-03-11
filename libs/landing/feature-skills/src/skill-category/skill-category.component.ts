import { Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SkillCategory } from '@thomas-szewczyk-cv/landing/data-access';
import { MatChip } from '@angular/material/chips';
import { MatTooltip } from '@angular/material/tooltip';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'lib-skill-category',
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatChip,
    MatTooltip,
    MatCard,
    MatCardHeader,
    MatCardContent,
  ],
  templateUrl: './skill-category.component.html',
  styleUrl: './skill-category.component.scss',
})
export class SkillCategoryComponent {
  $skillCategory = input<SkillCategory>();

  getSkillClass(level?: number) {
    const base = 'skill-chip';
    switch (level) {
      case 1:
        return `${base} beginner`;
      case 2:
        return `${base} intermediate`;
      case 3:
        return `${base} expert`;
      default:
        return `${base}`;
    }
  }

  getLevelTooltip(level?: number) {
    switch (level) {
      case 1:
        return 'Grundkenntnisse';
      case 2:
        return 'Mittlere Kenntnisse';
      case 3:
        return 'Fortgeschrittene Kenntnisse';
      default:
        return '';
    }
  }
}
