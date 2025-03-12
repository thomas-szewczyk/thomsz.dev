import { inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@thomas-szewczyk-cv/core/tokens';
import { ApiService } from '@thomas-szewczyk-cv/core/api';
import { CertificateEntry } from '../dtos/certificate-entry.dto';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  private readonly ENDPOINT: string;
  private readonly config: AppConfig;

  constructor(private readonly apiService: ApiService) {
    this.config = inject(APP_CONFIG);
    this.ENDPOINT = this.config.endpoints.certificates;
  }

  load() {
    return this.apiService.get<CertificateEntry[]>(this.ENDPOINT);
  }
}
