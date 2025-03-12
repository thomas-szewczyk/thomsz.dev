import { inject, Injectable } from '@angular/core';
import { ApiService } from '@thomas-szewczyk-cv/core/api';
import { SkillCategory } from '../dtos/skill-category.dto';
import { APP_CONFIG, AppConfig } from '@thomas-szewczyk-cv/core/tokens';

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
    return this.apiService.get<SkillCategory[]>(this.ENDPOINT);
  }
}
