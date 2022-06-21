import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusListComponent} from './bus/bus-list/bus-list.component';
import {BusEditComponent} from './bus/bus-edit/bus-edit.component';
import {ErrorComponent} from './error/error.component';
import {BusCreateComponent} from './bus/bus-create/bus-create.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: BusListComponent},
  {path: 'create', component: BusCreateComponent},
  {path: 'edit/:id', component: BusEditComponent},
  {path: 'error', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
