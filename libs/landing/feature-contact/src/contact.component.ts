import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { SocialLogosComponent } from '@thomas-szewczyk-cv/ui';

@Component({
  selector: 'lib-landing-contact',
  imports: [CommonModule, MatCard, MatCardContent, SocialLogosComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
