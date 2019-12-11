import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import {InputTextModule} from 'primeng/inputtext';
import { MessageModule } from 'primeng/components/message/message';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import {ToastModule} from 'primeng/toast';
import {KeyFilterModule} from 'primeng/keyfilter';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { MessageService } from 'primeng/api';
//import { AngularFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeedetailComponent,
    EditemployeeComponent,
    AddemployeeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    CardModule,
    ScrollPanelModule,
    ReactiveFormsModule,
    MessageModule,
    ToastModule,
    KeyFilterModule
  
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
