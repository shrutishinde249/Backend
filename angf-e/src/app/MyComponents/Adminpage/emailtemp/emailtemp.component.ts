import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { NetApiService } from 'src/app/Services/net-api.service';

const uploadAPI  = 'https://localhost:44375/api/Image/upload';


@Component({
  selector: 'app-emailtemp',
  templateUrl: './emailtemp.component.html',
  styleUrls: ['./emailtemp.component.css']
})
export class EmailtempComponent implements OnInit {

  @Input() subl!:string
  @Input() body!:string
  @Input() foo!:string
  id!:number
  re!:any
  constructor(private imageService : NetApiService,private router: Router) { }
  title = 'email template';
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'imageFile' });
  ngOnInit() {
    this.imgupload();
    this.id=1;
  };
  
  imgupload(){
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        console.log('FileUpload:uploaded successfully:', item, status, response);
        this.re=response;
        alert('Your file has been uploaded successfully');
    }
  }
  
  submit(){
    const data={
      Id:this.id,
      subject_line:this.subl,
      body:this.body,
      footer:this.foo,
      imageName:this.re
    }
    if(data.imageName==null){
      alert("please upload image")
    }
    else{
      this.imageService.emailput(this.id,data).subscribe(res=>{
      
        console.log("updated success");
        this.router.navigateByUrl('Lobcat');
      })
    }
    
  }
  }