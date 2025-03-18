import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MatDivider } from '@angular/material/divider';
import { LoadingOverlayComponent } from '@thomas-szewczyk-cv/ui';
import { LandingComponent } from '@thomas-szewczyk-cv/landing';
import { LandingStore } from '@thomas-szewczyk-cv/landing/data-access';
import { MenuItem } from './layout/data-access/models/menu-item.model';
import { MatListItem, MatNavList } from '@angular/material/list';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { ScrollToDirective } from '@thomas-szewczyk-cv/shared';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    MatDivider,
    LoadingOverlayComponent,
    LandingComponent,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    ScrollToDirective,
    MatButton,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'thomas-szewczyk-cv';
  $store = inject(LandingStore);
  $isLoading = this.$store.isLoading;

  $sidenavOpened = signal(false);

  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];
  }

  ngOnInit() {
    this.getMenuItemsConfig();
  }
  getMenuItemsConfig() {
    this.menuItems = [
      {
        label: 'T//S',
        link: 'hero',
        styleClass: 'logo',
      },
      {
        label: 'Über mich',
        link: 'about',
      },
      {
        label: 'Skills',
        link: 'skills',
      },
      {
        label: 'Lebenslauf',
        link: 'cv',
      },
      {
        label: 'Kontakt',
        link: 'contact',
      },
    ];
  }

  onCloseSidenav() {
    this.$sidenavOpened.set(false);
  }

  onToggleSidenav() {
    this.$sidenavOpened.update((sidenavOpened) => !sidenavOpened);
  }
}
