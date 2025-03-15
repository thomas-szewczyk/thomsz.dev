import {
  Component,
  computed,
  HostListener,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgClass, SlicePipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MenuItem } from './models/menu-item.model';
import { ScrollToDirective } from '@thomas-szewczyk-cv/shared';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbar,
    MatIcon,
    MatButton,
    NgClass,
    MatDivider,
    ScrollToDirective,
    MatMenu,
    MatMenuTrigger,
    SlicePipe,
    MatMenuItem,
    MatIconButton,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  private readonly SM_BREAKPOINT = 768;
  menuItems: MenuItem[];

  $scrollY = signal(0);
  $isScrolled = computed(() => this.$scrollY() > 0);

  constructor() {
    this.menuItems = [];
  }

  ngOnInit() {
    this.getMenuItemsConfig();
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    if (this.menuTrigger && window.innerWidth >= this.SM_BREAKPOINT) {
      this.menuTrigger.closeMenu();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.$scrollY.set(window.scrollY);
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
}
