import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-social-logos',
  imports: [CommonModule],
  templateUrl: './social-logos.component.html',
  styleUrl: './social-logos.component.scss',
})
export class SocialLogosComponent {
  socialLinks = [
    {
      name: 'linkedin',
      alt: 'LinkedIn Profil: Thomas Szewczyk',
      url: 'https://www.linkedin.com/in/thomas-szewczyk/',
      imageUrl: '/images/social/InBug-Black.png',
    },
    {
      name: 'wikipedia',
      alt: 'Wikipedia Artikel: Thomas Szewczyk',
      url: 'https://de.wikipedia.org/wiki/Thomas_Szewczyk',
      imageUrl: '/images/social/wikipedia_w.svg',
    },
    {
      name: 'github',
      alt: 'GitHub Profil: Thomas Szewczyk',
      url: 'https://github.com/thomas-szewczyk',
      imageUrl: '/images/technologies/github-mark.svg',
    },
  ];
}
