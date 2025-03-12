import { inject, Injectable } from '@angular/core';
import { CvEntry } from '../dtos/cv-entry.dto';
import { APP_CONFIG, AppConfig } from '@thomas-szewczyk-cv/core/tokens';
import { ApiService } from '@thomas-szewczyk-cv/core/api';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private readonly ENDPOINT: string;
  private readonly config: AppConfig;

  constructor(private readonly apiService: ApiService) {
    this.config = inject(APP_CONFIG);
    this.ENDPOINT = this.config.endpoints.cvEntries;
  }

  load() {
    return this.apiService.get<CvEntry[]>(this.ENDPOINT);
  }
}
