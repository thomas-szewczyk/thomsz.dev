import { Component, inject, Signal } from '@angular/core';
import {
  LandingStore,
  SkillCategory,
} from '@thomas-szewczyk-cv/landing/data-access';
import { SkillCategoryComponent } from './skill-category/skill-category.component';

@Component({
  selector: 'lib-landing-skills',
  imports: [SkillCategoryComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent {
  store = inject(LandingStore);
  $skills: Signal<SkillCategory[]> = this.store.skillCategories;
}
