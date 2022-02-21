import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingInstructComponent } from './MyComponents/billing_ins/billing-instruct/billing-instruct.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ViewcompComponent } from './MyComponents/billing_ins/viewcomp/viewcomp.component';
import { EditcompComponent } from './MyComponents/billing_ins/editcomp/editcomp.component';
import { ComponentComponent } from './MyComponents/Distribution_Queue/component/component.component';
import { AddcompComponent } from './MyComponents/Adminpage/addcomp/addcomp.component';
import { AdminpageComponent } from './MyComponents/Adminpage/adminpage/adminpage.component';
import { EditdataComponent } from './MyComponents/Adminpage/editdata/editdata.component';
import { EmailtempComponent } from './MyComponents/Adminpage/emailtemp/emailtemp.component';
import { ViewdataComponent } from './MyComponents/Adminpage/viewdata/viewdata.component';

const routes: Routes = [
  {path:"",redirectTo: 'Home', pathMatch: 'full'},
  {path:"Home",component:HomeComponent},
  {path:"billing-instruction",component:BillingInstructComponent},
  {path:"billing-instruction/:billingId/view/:itemId/item",component: ViewcompComponent,data:{animation:'isRight'}},
  {path:"billing-instruction/:billingId/edit/:itemId/item",component:EditcompComponent,data:{animation:'isRight'}},
  {path:"Lobcat",component:AdminpageComponent},
  {path:"Lobcat/:LobcatId/view",component:ViewdataComponent,data: { animation: 'isRight' }},
  {path:"Lobcat/create",component:AddcompComponent,data: { animation: 'isLeft' }},
  {path:"Lobcat/:LobcatId/edit",component:EditdataComponent,data: { animation: 'isRight' }},
  {path:"email-template",component:EmailtempComponent,data: { animation: 'isRight' }},
  {path:"libraries",component:ComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
