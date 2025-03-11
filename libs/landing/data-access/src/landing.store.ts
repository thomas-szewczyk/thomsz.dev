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


type LandingState = {
  skillCategories: SkillCategory[];
  isLoading: boolean;
  error: string | null;
};

const initialLandingsState: LandingState = {
  skillCategories: [],
  isLoading: false,
  error: null,
};

export const LandingStore = signalStore(
  { providedIn: 'root' },
  withState<LandingState>(initialLandingsState),

  withProps(() => ({
    _skillsService: inject(SkillsService)
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
  }))
);
