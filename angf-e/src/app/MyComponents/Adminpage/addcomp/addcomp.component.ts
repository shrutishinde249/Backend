import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetApiService } from 'src/app/Services/net-api.service';


@Component({
  selector: 'app-addcomp',
  templateUrl: './addcomp.component.html',
  styleUrls: ['./addcomp.component.css']
})
export class AddcompComponent implements OnInit {

  home_interface!:home
  @Input() category_name!:string
  @Input() createdBy!:string
  updatedBy!:string
  
  constructor(public service: NetApiService,
    private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    const home_interface={
      lobCategoryName:this.category_name,
      createdBy:this.createdBy,
      updatedBy:'',
      isActive:true
    }
    console.log(home_interface)
    this.service.addHome(home_interface).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('Lobcat');
    })
  }
}
interface home {
  lobCategoryName: string;
  createdBy: string;
  updatedBy: string;
  isActive:boolean
}
