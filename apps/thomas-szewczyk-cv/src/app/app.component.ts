import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MatDivider } from '@angular/material/divider';
import { LoadingOverlayComponent } from '@thomas-szewczyk-cv/ui';
import { LandingStore } from '@thomas-szewczyk-cv/landing/data-access';
import { LandingComponent } from '@thomas-szewczyk-cv/landing';

@Component({
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    MatDivider,
    LoadingOverlayComponent,
    LandingComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'thomas-szewczyk-cv';
  $store = inject(LandingStore);
  $isLoading = this.$store.isLoading;
}
