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

import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {loadFaqStartPage, loadFaqStartPageSuccess, updateDashboardMetadata,} from "./start-page.action";
import {StartPageService} from "./start-page.service";
import {FaqService} from "../faq/faq.service";
import {showError, showSuccess} from "../app/app.action";
import {loadMyDashboards} from "../my-dashboards/my-dashboards.action";

@Injectable()
export class StartPageEffects {

  updateDashboardsMetadata$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(updateDashboardMetadata),
      switchMap(action => this._startPageService.updateDashboardMetadata(action.dashboard)),
      switchMap(result => of(loadMyDashboards(), showSuccess({message: '@Dashboard metadata updated'}))),
      catchError(e => of(showError(e)))
    )
  });

  loadFaqStartPage$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(loadFaqStartPage),
      switchMap(() => this._faqService.getFaq()),
      switchMap(result => of(loadFaqStartPageSuccess({payload: result}))),
      catchError(e => of(showError(e)))
    )
  });

  constructor(
    private _actions$: Actions,
    private _startPageService: StartPageService,
    private _faqService: FaqService,
  ) {
  }
}
