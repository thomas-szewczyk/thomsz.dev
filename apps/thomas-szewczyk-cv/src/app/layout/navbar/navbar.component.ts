import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MenuItem } from './data-access/models/menu-item.model';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatIcon, MatButton, NgClass, MatDivider],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
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
}
