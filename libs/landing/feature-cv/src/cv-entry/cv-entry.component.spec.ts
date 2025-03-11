import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEntryComponent } from './cv-entry.component';

describe('CvEntryComponent', () => {
  let component: CvEntryComponent;
  let fixture: ComponentFixture<CvEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
