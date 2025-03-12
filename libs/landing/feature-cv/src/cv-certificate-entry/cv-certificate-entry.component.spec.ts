import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvCertificateEntryComponent } from './cv-certificate-entry.component';

describe('CvCertificateEntryComponent', () => {
  let component: CvCertificateEntryComponent;
  let fixture: ComponentFixture<CvCertificateEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvCertificateEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvCertificateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
