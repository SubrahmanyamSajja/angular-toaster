import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ApiService } from './api.service';
import { ToasterService } from './toaster/toaster.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [DashboardComponent, UsersListComponent, EmployeeListComponent]
})
export class AppComponent {
  title = 'new1';
  constructor(private toastService: ToasterService) {

  }
  success(){
    this.toastService.success({title:'Success Title Success Title Success Title Success Title', message:'Success <strong>Message</strong> for toast body',time:5000, shake:true}).close.subscribe(res=>{
      console.log('closed');
    });
  }
  error(){
    this.toastService.error({title:'Error Title', message:'<h1>Error Message for toast body</h1>'});
  }

  info(){
    this.toastService.info({title:'Info Title', message:'Info Message for toast body'});
  }

  warn(){
    this.toastService.warn({title:'Warn Title', message:'Warn Message for toast body'});
  }


}
