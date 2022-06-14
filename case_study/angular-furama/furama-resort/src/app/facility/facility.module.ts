import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityRoutingModule } from './facility-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {FacilityCreateComponent} from "./facility-create/facility-create.component";
import {FacilityDetailsComponent} from "./facility-details/facility-details.component";
import {FacilityEditComponent} from "./facility-edit/facility-edit.component";


@NgModule({
  declarations: [
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityDetailsComponent,
    FacilityEditComponent,
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FacilityModule { }
