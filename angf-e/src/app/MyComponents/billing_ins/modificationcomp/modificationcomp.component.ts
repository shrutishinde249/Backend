import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NetApiService } from 'src/app/Services/net-api.service';
import { ClientApiService } from 'src/app/Services/client-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  ViewEncapsulation, ViewChild } from "@angular/core";
import { FieldSettingsModel,ToolbarSettingsModel} from "@syncfusion/ej2-dropdowns";

@Component({
  selector: 'app-modificationcomp',
  templateUrl: './modificationcomp.component.html',
  styleUrls: ['./modificationcomp.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ModificationcompComponent implements OnInit {
  @Input() item!:any;
  date!:Date
  desc!:string
  glob!:any
  contact_name!:string
  email!:string
  id!:number
  instr_level!:string
 li!:string
 
  public ird_account:boolean=true
  public ird_contact:boolean=false
  constructor(public service: ClientApiService,private router: Router) { }
 
  ngOnInit(): void {
    this.dataA;
    this.dataB;
    
  }
  
   ird(){
    this.ird_account=true;
    this.ird_contact=false;
}
      irds(){
    this.ird_account=false;
    this.ird_contact=true;
}
@ViewChild("listbox1", { static: false }) public listObj1:any;
@ViewChild("listbox2", { static: false }) public listObj2:any;
public dataA: { [key: string]: Object }[] = [
  { Name: "InlandMarine"},
  { Name: "Casualty"},
  { Name: "Other"},
  { Name: "Package"},
  { Name: "Executive Risk"},
  { Name: "Aviation" },
  { Name: "Surety"},
  { Name: "Marine" },
  { Name: "Enviornmental"}
];
public dataB: { [key: string]: Object }[]=[];

public fields: FieldSettingsModel = { text: "Name" };
public toolbarSettings: ToolbarSettingsModel = {
  items: [
    "moveTo",
    "moveFrom",
    "moveAllTo",
    "moveAllFrom"
  ]
};
click() {
  var data = this.listObj2.getDataList();
 //this.li.push(data[0].Name);
  this.li=(data[0].Name)
  this.dataB.push(data);
  delete this.dataA[data];
  console.log(this.dataA);
  console.log(this.dataB);
}
actionBegin(args: any) {
  console.log(args);
}
actionComplete(args: any) {
  console.log(args);
}


  submit(){
    var data={
      instr_level:this.instr_level,
      agency_code:'test code',
      s_id:'01',
      contact_name:this.item.client_name,
      glob:this.li,
      desc:this.desc,
      updated_by:'test user',
      updated_on:this.date,
      client_inv_del:null,
      email:this.item.email,
    }
   
    this.id=this.item.id;
    
    //data.glob[0]=data.glob;
    this.service.clientmeta(this.id,data).subscribe(res=>{
      
      console.log(data)
      this.router.navigateByUrl('Home');
    })
  }
}