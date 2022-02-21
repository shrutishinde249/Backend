import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NetApiService } from 'src/app/Services/net-api.service';
import { ClientApiService } from 'src/app/Services/client-api.service';

@Component({
  selector: 'app-viewcomp',
  templateUrl: './viewcomp.component.html',
  styleUrls: ['./viewcomp.component.css']
})
export class ViewcompComponent implements OnInit {
  id!:number;
  itemId!:number;
  @Input() x:any
  item!:any
  constructor(public service: ClientApiService,private route: ActivatedRoute,private router: Router){ }

    
  ngOnInit(): void {
    this.showde();
    console.log(this.x.inv_delivery.id);
  }
  
  showde(){
    this.id = this.route.snapshot.params['billingId'];
    this.itemId=this.route.snapshot.params['itemId'];
    this.service.getclientbyid(this.id).subscribe(data=>{
      this.item=data;
      for(let m of this.item.client_inv_del.$values){
        if(m.inv_delivery.id==this.itemId)
        {
          this.x=m;
        }
      }
    });
  }
}