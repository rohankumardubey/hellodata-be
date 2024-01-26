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

import {AppState} from "../app/app.state";
import {createSelector} from "@ngrx/store";
import {LineageDocsState} from "./lineageDocsState";
import {selectSelectedDataDomain} from "../my-dashboards/my-dashboards.selector";
import {selectRouteParam} from "../router/router.selectors";
import {selectAllDataDomains} from "../users-management/users-management.selector";

const myLineageDocsState = (state: AppState) => state.myLineageDocs;

export const selectProjectIdParam = selectRouteParam('id');
export const selectContextParam = selectRouteParam('context');
export const selectPathParam = selectRouteParam('path');


export const selectMyLineageDocs = createSelector(
  myLineageDocsState,
  selectSelectedDataDomain,
  (state: LineageDocsState, selectedDataDomain) => {
    if (selectedDataDomain === null || selectedDataDomain.id === '') {
      return state.myLineageDocs;
    }
    return state.myLineageDocs.filter(lineageDoc => lineageDoc.contextKey === selectedDataDomain?.key);
  }
);


export const selectLineageInfo =
  createSelector(
    selectProjectIdParam,
    selectContextParam,
    selectPathParam,
    selectAllDataDomains,
    (projectId, contextKey, path, dataDomains) => {
      return {
        dataDomain: dataDomains.find(dataDomain => dataDomain.contextKey === contextKey),
        projectId,
        contextKey,
        path
      }
    });