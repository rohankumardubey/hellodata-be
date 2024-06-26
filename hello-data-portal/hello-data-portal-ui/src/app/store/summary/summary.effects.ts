///
/// Copyright © 2024, Kanton Bern
/// All rights reserved.
///
/// Redistribution and use in source and binary forms, with or without
/// modification, are permitted provided that the following conditions are met:
///     * Redistributions of source code must retain the above copyright
///       notice, this list of conditions and the following disclaimer.
///     * Redistributions in binary form must reproduce the above copyright
///       notice, this list of conditions and the following disclaimer in the
///       documentation and/or other materials provided with the distribution.
///     * Neither the name of the <organization> nor the
///       names of its contributors may be used to endorse or promote products
///       derived from this software without specific prior written permission.
///
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
/// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
/// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
/// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
/// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
/// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
/// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
/// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
/// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
/// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
///

import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {SummaryService} from "./summary.service";
import {
  createOrUpdateDocumentation,
  loadDocumentation,
  loadDocumentationSuccess,
  loadPipelines,
  loadPipelinesSuccess,
  loadStorageSize,
  loadStorageSizeSuccess,
} from "./summary.actions";
import {Injectable} from "@angular/core";
import {showError, showSuccess} from "../app/app.action";
import {clearUnsavedChanges} from "../unsaved-changes/unsaved-changes.actions";

@Injectable()
export class SummaryEffects {
  loadDocumentation$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(loadDocumentation),
      switchMap(() => this._summaryService.getDocumentation()),
      switchMap(result => of(loadDocumentationSuccess({payload: result}))),
      catchError(e => of(showError(e)))
    )
  });

  createOrUpdateDocumentation$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(createOrUpdateDocumentation),
      switchMap(action => this._summaryService.createOrUpdateDocumentation(action.documentation)),
      switchMap(result => of(clearUnsavedChanges(), loadDocumentation(), showSuccess({message: '@Documentation updated'}))),
      catchError(e => of(showError(e)))
    )
  });

  loadPipelines$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(loadPipelines),
      switchMap(() => this._summaryService.getPipelines()),
      switchMap(result => of(loadPipelinesSuccess({payload: result}))),
      catchError(e => of(showError(e)))
    )
  });

  loadStorageSize$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(loadStorageSize),
      switchMap(() => this._summaryService.getStorageSize()),
      switchMap(result => of(loadStorageSizeSuccess({payload: result}))),
      catchError(e => of(showError(e)))
    )
  });

  constructor(
    private _actions$: Actions,
    private _summaryService: SummaryService
  ) {
  }
}
