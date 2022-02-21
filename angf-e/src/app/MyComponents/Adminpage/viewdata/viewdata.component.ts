import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NetApiService } from 'src/app/Services/net-api.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {

  id!:number;
  item!:any;
  constructor( public service: NetApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.showde();
  }
  showde(){
    this.id = this.route.snapshot.params['LobcatId'];
    this.service.getbyid(this.id).subscribe(data=>{
      this.item=data;
    });
  }
}
