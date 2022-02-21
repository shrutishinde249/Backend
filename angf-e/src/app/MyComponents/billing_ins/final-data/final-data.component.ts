import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NetApiService } from 'src/app/Services/net-api.service';
import { ClientApiService } from 'src/app/Services/client-api.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-final-data',
  templateUrl: './final-data.component.html',
  styleUrls: ['./final-data.component.css']
})
export class FinalDataComponent implements OnInit {
  @Input() item!:any
  x:any

  constructor(public service: ClientApiService,private route: ActivatedRoute,private router: Router){
  }

  ngOnInit(): void {
  }

  show(data:any){
    this.x=data
  }

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      return this.item.client_inv_del.$values;
    }

    this.item.client_inv_del.$values = this.item.client_inv_del.$values.sort((a:any, b:any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'level':
          return this.compare(a.inv_delivery.instr_level, b.inv_delivery.instr_level, isAsc);
          case 'code':
          return this.compare(a.inv_delivery.agency_code, b.inv_delivery.agency_code, isAsc);
          case 'siteId':
          return this.compare(a.inv_delivery.s_id, b.inv_delivery.s_id, isAsc);
          case 'contact':
          return this.compare(a.inv_delivery.contact_name, b.inv_delivery.contact_name, isAsc);
          case 'glob':
          return this.compare(a.inv_delivery.glob, b.inv_delivery.glob, isAsc);
          case 'desc':
          return this.compare(a.inv_delivery.desc, b.inv_delivery.desc, isAsc);
          case 'updatedby':
          return this.compare(a.inv_delivery.updated_by, b.inv_delivery.updated_by, isAsc);
          case 'updated on':
          return this.compare(a.inv_delivery.updated_on, b.inv_delivery.updated_on, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string | any, b: number | string | any, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
