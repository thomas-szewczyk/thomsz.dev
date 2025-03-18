import {
  Component,
  computed,
  HostListener,
  input,
  output,
  signal,
} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MenuItem } from '../data-access/models/menu-item.model';
import { ScrollToDirective } from '@thomas-szewczyk-cv/shared';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbar,
    MatIcon,
    MatButton,
    MatDivider,
    ScrollToDirective,
    MatIconButton,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly SM_BREAKPOINT = 768;

  $menuItems = input<MenuItem[]>([]);
  $sidenavOpened = input<boolean>(false);

  $scrollY = signal(0);
  $isScrolled = computed(() => this.$scrollY() > 0);

  toggleSidenav = output<void>();
  closeSidenav = output<void>();

  @HostListener('window:resize', [])
  onWindowResize(): void {
    if (window.innerWidth >= this.SM_BREAKPOINT) {
      this.closeSidenav.emit();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.$scrollY.set(window.scrollY);
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
