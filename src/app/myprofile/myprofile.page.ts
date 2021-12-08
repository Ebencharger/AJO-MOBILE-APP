import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
 myName="";
 myId="";
 myCountry="";
 myPhone="";
 myEmail="";
 myDate="";
  constructor(public service:MyServiceService) { }

  ngOnInit() {
    this.myName=this.service.loginUser.name;
    this.myId=this.service.loginUser.id;
    this.myCountry=this.service.loginUser.country;
    this.myPhone=this.service.loginUser.phone;
    this.myEmail=this.service.loginUser.email;
    this.myDate=this.service.loginUser.datereg;
  }
  
}
