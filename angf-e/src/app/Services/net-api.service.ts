import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  readonly netapiUrl="https://localhost:44375";
  constructor(private http:HttpClient) {}
    getHome():Observable<home[]>{
      return this.http.get<any>(this.netapiUrl+ `/LobCategories`);
    }
    getbyid(id:number):Observable<any>{
      return this.http.get(this.netapiUrl+`/LobCategories/${id}`)
    }
   addHome(data:home) {
    return this.http.post(this.netapiUrl + `/LobCategories`, data)
   }  

   updateHome(data:any,id:number){
    return this.http.put(this.netapiUrl +`/LobCategories/${id}`,data);
   }
   deleteHome(id:number){
     return this.http.delete(this.netapiUrl+`/LobCategories/${id}`)
   }
   
   // email template
   getEmailt() :Observable<any[]>{
    return this.http.get<any>(this.netapiUrl+`/api/Image`);
   }
   getEmailbyId(id:number):Observable<any>{
     return this.http.get(this.netapiUrl+`/api/Image/${id}`)
   }
   emailput(id:number,data:any){
     return this.http.put(this.netapiUrl+`/api/Image/${id}`,data);
   }
   //Invoice delivery
   getinv_add() :Observable<any[]>{
    return this.http.get<any>(this.netapiUrl+`/api/inv_delivery`);
   }
   getinv_addId(id:number):Observable<any>{
     return this.http.get(this.netapiUrl+`/api/inv_delivery/${id}`)
   }
   inv_addpost(data:modification) {
    return this.http.post(this.netapiUrl + `/api/inv_delivery`, data)
   }  
   inv_addput(id:number,data:any){
     return this.http.put(this.netapiUrl+`/api/inv_delivery${id}`,data);
   }
   
}
interface home {
  lobCategoryName: string;
  createdBy: string;
  updatedBy: string;  
}
interface modification {
        instr_level: string;
        agency_code: string;
        s_id: number;
        contact_name : string;
        glob : string;
        desc : string;
        updated_by : string;
        updated_on : string;
        client_inv_del: string;
}