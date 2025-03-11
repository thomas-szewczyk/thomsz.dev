import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { SkillCategory } from './dtos/skill-category.dto';
import { SkillsService } from './services/skills.service';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { tapResponse } from '@ngrx/operators';
import { CvEntry } from './dtos/cv-entry.dto';
import { CertificateEntry } from './dtos/certificate-entry.dto';
import { CertificatesService } from './services/certificates.service';
import { CvService } from './services/cv.service';

type LandingState = {
  skillCategories: SkillCategory[];
  cvEntries: CvEntry[];
  certificates: CertificateEntry[];
  isLoading: boolean;
  error: string | null;
};

const initialLandingsState: LandingState = {
  skillCategories: [],
  cvEntries: [],
  certificates: [],
  isLoading: false,
  error: null,
};

export const LandingStore = signalStore(
  { providedIn: 'root' },
  withState<LandingState>(initialLandingsState),

  withProps(() => ({
    _skillsService: inject(SkillsService),
    _cvEntriesService: inject(CvService),
    _certificatesService: inject(CertificatesService),
  })),

  withMethods((store) => ({
    loadSkillGroups: rxMethod(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return store._skillsService.load().pipe(
            tapResponse({
              next: (skillCategories) => patchState(store, { skillCategories }),
              error: (err: HttpErrorResponse) =>
                patchState(store, { error: err.message }),
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
    loadCvEntries: rxMethod(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return store._cvEntriesService.load().pipe(
            tapResponse({
              next: (cvEntries) => patchState(store, { cvEntries }),
              error: (err: HttpErrorResponse) =>
                patchState(store, { error: err.message }),
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
    loadCertificates: rxMethod(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return store._certificatesService.load().pipe(
            tapResponse({
              next: (certificates) => patchState(store, { certificates }),
              error: (err: HttpErrorResponse) =>
                patchState(store, { error: err.message }),
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
  }))
);
