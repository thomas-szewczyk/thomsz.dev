import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialLogosComponent } from './social-logos.component';

describe('SocialLogosComponent', () => {
  let component: SocialLogosComponent;
  let fixture: ComponentFixture<SocialLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLogosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
