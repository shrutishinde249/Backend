import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NetApiService } from './Services/net-api.service';
import { HomeComponent } from './MyComponents/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { BillingInstructComponent } from './MyComponents/billing_ins/billing-instruct/billing-instruct.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FinalDataComponent } from './MyComponents/billing_ins/final-data/final-data.component';
import { ModificationcompComponent } from './MyComponents/billing_ins/modificationcomp/modificationcomp.component';
import { DragDropCompComponent } from './MyComponents/billing_ins/drag-drop-comp/drag-drop-comp.component';
import { ViewcompComponent } from './MyComponents/billing_ins/viewcomp/viewcomp.component';
import { EditcompComponent } from './MyComponents/billing_ins/editcomp/editcomp.component';
import { DropDownListModule, ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePipe } from '@angular/common';
import { ComponentComponent } from './MyComponents/Distribution_Queue/component/component.component';
import { CardbodyComponent } from './MyComponents/Distribution_Queue/cardbody/cardbody.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddcompComponent } from './MyComponents/Adminpage/addcomp/addcomp.component';
import { AdminpageComponent } from './MyComponents/Adminpage/adminpage/adminpage.component';
import { EditdataComponent } from './MyComponents/Adminpage/editdata/editdata.component';
import { EmailtempComponent } from './MyComponents/Adminpage/emailtemp/emailtemp.component';
import { ViewdataComponent } from './MyComponents/Adminpage/viewdata/viewdata.component';




@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    BillingInstructComponent,
    FinalDataComponent,
    ModificationcompComponent,
    DragDropCompComponent,
    ViewcompComponent,
    EditcompComponent,
    ComponentComponent,
    CardbodyComponent,
    AddcompComponent,
    AdminpageComponent,
    EditdataComponent,
    EmailtempComponent,
    ViewdataComponent,
    

    
   
    
  ],
  imports: [
    BrowserModule,
    DragDropModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileUploadModule,
    ListBoxModule,
    DropDownListModule,
        MatSortModule,
        MatTableModule,MatPaginatorModule,
        MatSortModule
  ],
  providers: [NetApiService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
