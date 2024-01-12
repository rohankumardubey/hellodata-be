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

import {Action} from "@ngrx/store";
import {ExternalDashboard, ExternalDashboardMetadata} from "./external-dashboards.model";

export enum ExternalDashboardsActionType {
  LOAD_EXTERNAL_DASHBOARDS = '[EXTERNAL DASHBOARDS] Load EXTERNAL DASHBOARDS',
  LOAD_EXTERNAL_DASHBOARDS_SUCCESS = '[EXTERNAL DASHBOARDS] Load EXTERNAL DASHBOARDS SUCCESS',
  CREATE_EXTERNAL_DASHBOARD = '[EXTERNAL DASHBOARDS] Create EXTERNAL DASHBOARD',
  CREATE_EXTERNAL_DASHBOARD_SUCCESS = '[EXTERNAL DASHBOARDS] Create EXTERNAL DASHBOARD SUCCESS',
  UPDATE_EXTERNAL_DASHBOARD = '[EXTERNAL DASHBOARDS] Update EXTERNAL DASHBOARD',
  UPDATE_EXTERNAL_DASHBOARD_SUCCESS = '[EXTERNAL DASHBOARDS] Update EXTERNAL DASHBOARD SUCCESS',
  DELETE_EXTERNAL_DASHBOARD = '[EXTERNAL DASHBOARDS] Delete EXTERNAL DASHBOARD',
  DELETE_EXTERNAL_DASHBOARD_SUCCESS = '[EXTERNAL DASHBOARDS] Delete EXTERNAL DASHBOARD SUCCESS',
  LOAD_EXTERNAL_DASHBOARD_BY_ID = '[EXTERNAL DASHBOARDS] Load EXTERNAL DASHBOARD BY ID',
  LOAD_EXTERNAL_DASHBOARD_BY_ID_SUCCESS = '[EXTERNAL DASHBOARDS] Load EXTERNAL DASHBOARD BY ID SUCCESS',
  OPEN_EXTERNAL_DASHBOARD_EDITION = '[EXTERNAL DASHBOARDS] Open EXTERNAL DASHBOARD edition',
}


export class LoadExternalDashboards implements Action {
  public readonly type = ExternalDashboardsActionType.LOAD_EXTERNAL_DASHBOARDS;
}

export class LoadExternalDashboardsSuccess implements Action {
  public readonly type = ExternalDashboardsActionType.LOAD_EXTERNAL_DASHBOARDS_SUCCESS;

  constructor(public payload: ExternalDashboard[]) {
  }
}

export class CreateExternalDashboard implements Action {
  public readonly type = ExternalDashboardsActionType.CREATE_EXTERNAL_DASHBOARD;

  constructor(public dashboard: ExternalDashboardMetadata) {
  }
}

export class CreateExternalDashboardSuccess implements Action {
  public readonly type = ExternalDashboardsActionType.CREATE_EXTERNAL_DASHBOARD_SUCCESS;

  constructor(public dashboard: ExternalDashboardMetadata) {
  }
}

export class UpdateExternalDashboard implements Action {
  public readonly type = ExternalDashboardsActionType.UPDATE_EXTERNAL_DASHBOARD;

  constructor(public dashboard: ExternalDashboard) {
  }
}

export class UpdateExternalDashboardSuccess implements Action {
  public readonly type = ExternalDashboardsActionType.UPDATE_EXTERNAL_DASHBOARD_SUCCESS;

  constructor(public dashboard: ExternalDashboard) {
  }
}

export class DeleteExternalDashboard implements Action {
  public readonly type = ExternalDashboardsActionType.DELETE_EXTERNAL_DASHBOARD;

  constructor(public dashboard: ExternalDashboard) {
  }
}

export class DeleteExternalDashboardSuccess implements Action {
  public readonly type = ExternalDashboardsActionType.DELETE_EXTERNAL_DASHBOARD_SUCCESS;

  constructor(public dashboard: ExternalDashboard) {
  }
}

export class LoadExternalDashboardById implements Action {
  public readonly type = ExternalDashboardsActionType.LOAD_EXTERNAL_DASHBOARD_BY_ID;
}

export class LoadExternalDashboardByIdSuccess implements Action {
  public readonly type = ExternalDashboardsActionType.LOAD_EXTERNAL_DASHBOARD_BY_ID_SUCCESS;

  constructor(public dashboard: ExternalDashboard) {
  }
}

export class OpenExternalDashboardEdition implements Action {
  public readonly type = ExternalDashboardsActionType.OPEN_EXTERNAL_DASHBOARD_EDITION;

  constructor(public dashboard: ExternalDashboard | null = null) {
  }
}

export type ExternalDashboardsActions =
  LoadExternalDashboards | LoadExternalDashboardsSuccess | CreateExternalDashboard | UpdateExternalDashboard | DeleteExternalDashboard |
  CreateExternalDashboardSuccess | UpdateExternalDashboardSuccess | DeleteExternalDashboardSuccess |
  LoadExternalDashboardById | LoadExternalDashboardByIdSuccess | OpenExternalDashboardEdition