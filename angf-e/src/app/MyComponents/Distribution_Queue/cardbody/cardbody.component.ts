import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientApiService } from 'src/app/Services/client-api.service';

@Component({
  selector: 'app-cardbody',
  templateUrl: './cardbody.component.html',
  styleUrls: ['./cardbody.component.css']
})
export class CardbodyComponent implements OnInit {
  @Input()
  item!:any
  x:any
  constructor(public service: ClientApiService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

}