import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  currentYear: string;

  constructor() {
    this.currentYear = '';
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear().toString();
  }
}
