import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  menu=false;
  name:any;
  showdis=false;
  constructor(public service:MyServiceService,private route:Router, private route2:ActivatedRoute) { }
 
  ngOnInit() {
    if (this.service.loginUser.driftplan=="") {
      setTimeout(() => {
        this.showdis=true;
      }, 3000);
    }
    this.name=this.service.loginUser.name;
    console.log(this.name);
    
  }
  handleToggle(){
  this.menu=!this.menu;
  }

  handleWalletR(){
    this.menu=false;
    this.route.navigate(["dashboard/mywallet"]);
  }
  handleProfileR(){
    this.menu=false;
    this.route.navigate(["dashboard/myprofile"]);
  }
  handleChangeR(){
    this.menu=false;
    this.route.navigate(["dashboard/mychangeplan"]);
  }
  handleThriftR(){
    this.menu=false;
    this.route.navigate(["dashboard/mythrift"]);
  }
  handleShowme(){
    this.showdis=false;
  }
}
