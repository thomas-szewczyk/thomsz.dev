import { inject, Injectable } from '@angular/core';
import { ApiService } from '@thomas-szewczyk-cv/core/api';
import { SkillCategory } from '../dtos/skill-category.dto';
import { APP_CONFIG, AppConfig } from '@thomas-szewczyk-cv/core/tokens';
import { map } from 'rxjs';
import { Skill } from '../dtos/skill.dto';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private readonly ENDPOINT: string;
  private readonly config: AppConfig;

  constructor(private readonly apiService: ApiService) {
    this.config = inject(APP_CONFIG);
    this.ENDPOINT = this.config.endpoints.skills;
  }

  load() {
    return this.apiService.get<SkillCategory[]>(this.ENDPOINT).pipe(
      map((skillCategories) =>
        skillCategories.map((category) => {
          category.skills = this.sortSkillsByLevel(category.skills);
          return category;
        })
      )
    );
  }

  private sortSkillsByLevel(skills: Skill[]) {
    return skills.sort((a, b) => (b.level ?? 0) - (a.level ?? 0));
  }
}
