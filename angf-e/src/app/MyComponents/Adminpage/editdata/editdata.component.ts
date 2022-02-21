import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NetApiService } from 'src/app/Services/net-api.service';
@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  id!: number;
  item!:any;

  
  constructor(
    public service: NetApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    
    this.getdata();
    
  }
   
  
  getdata(){
    this.id = this.route.snapshot.params['LobcatId'];
    this.service.getbyid(this.id).subscribe(data=>{
      this.item=data;
    });
  }   

  submit(){
    console.log();
    this.service.updateHome(this.item, this.id).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('Lobcat');
    })
  }
}
interface Post {
  lobCategoryName: string;
  createdBy: string;
  updatedBy: string;
  isActive:boolean
}
