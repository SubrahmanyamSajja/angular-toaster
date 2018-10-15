import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ToasterModule } from './toaster/toaster.module';
const appRoutes:Route[]=[
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full',
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'users',
    component:UsersListComponent
  },
  {
    path:'employees',
    component:EmployeeListComponent
  },


];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ToasterModule,
  ],
  providers: [
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
