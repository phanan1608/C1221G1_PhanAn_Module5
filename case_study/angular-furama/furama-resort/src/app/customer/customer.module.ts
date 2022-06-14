import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CustomerModule {
}
