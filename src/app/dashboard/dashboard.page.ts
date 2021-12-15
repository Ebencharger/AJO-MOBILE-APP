import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  menu = false;
  name: any;
  showdis = false;
  date = new Date;
  day: any;
  newmonth: any;
  AJO = [];
  dayname: any;
  newdate: any;
  constructor(public service: MyServiceService, private route: Router, private route2: ActivatedRoute, private nativeStorage: NativeStorage) { }

  ngOnInit() {
    this.nativeStorage.getItem('AJO')
      .then(
        data => {
          this.AJO = JSON.parse(data)
        },
        error => {
          this.AJO = [
            { admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }], user: [] }
          ],
            this.nativeStorage.setItem("AJO", JSON.stringify(this.AJO)),
            error
        }
      );
    if (this.service.loginUser.driftplan == "") {
      setTimeout(() => {
        this.showdis = true;
      }, 3000);
    }
    this.name = this.service.loginUser.name;
    console.log(this.name);
     
    setTimeout(() => {
      if (this.date.getFullYear()-this.AJO[0].user[this.service.id].year>=1) {
        let link=false;
        this.AJO[0].user[this.service.id].link=link;
        this.nativeStorage.setItem('AJO', JSON.stringify(this.AJO))
        .then(
          () => console.log('Stored item!'),
          error => alert('Error storing item'+ error)
        );
      }
      if (this.date.getDate()<10) {
        this.day="0"+this.date.getDate();
      }
      this.day=this.date.getDate();
     if (this.date.getMonth()<10) {
       this.newmonth="0"+(this.date.getMonth()+1);   
     }
     this.dayname=this.service.dayarray[this.date.getDay()];
    
     if (this.AJO[0].user[this.service.id].statement.length==1) {
       console.log("hoooo");
      this.AJO[0].user[this.service.id].statement[0].checkday=this.dayname;
      this.nativeStorage.setItem('AJO', JSON.stringify(this.AJO))
      .then(
        () => console.log('Stored item!'),
        error => alert('Error storing item'+ error)
      );
     }
     else if (this.AJO[0].user[this.service.id].statement.length>1) {
       console.log("ahhhhhhhhhh");
      this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length-1].checkday=this.dayname;
      this.nativeStorage.setItem('AJO', JSON.stringify(this.AJO))
        .then(
          () => console.log('Stored item!'),
          error => alert('Error storing item'+ error)
        );
     }
  
  
      if (this.date.getDay()==((this.AJO[0].user[this.service.id].countday+1) || (this.date.getDay()!=this.AJO[0].user[this.service.id].countday))) {
        this.AJO[0].user[this.service.id].countday=this.AJO[0].user[this.service.id].countday+1;
        this.nativeStorage.setItem('AJO', JSON.stringify(this.AJO))
        .then(
          () => console.log('Stored item!'),
          error => alert('Error storing item'+ error)
        );
       }
       if (this.date.getMonth()==((this.AJO[0].user[this.service.id].countmonth+1) || (this.date.getMonth()!=this.AJO[0].user[this.service.id].countmonth))) {
        this.AJO[0].user[this.service.id].countmonth= this.AJO[0].user[this.service.id].countmonth+1
        this.nativeStorage.setItem('AJO', JSON.stringify(this.AJO))
        .then(
          () => console.log('Stored item!'),
          error => alert('Error storing item'+ error)
        );
       }
       if (this.date.getFullYear()==((this.AJO[0].user[this.service.id].countday+1) || (this.date.getFullYear()!=this.AJO[0].user[this.service.id].countyear))) {
        this.AJO[0].user[this.service.id].countyear= this.AJO[0].user[this.service.id].countyear+1;
        this.nativeStorage.setItem('AJO', JSON.stringify(this.AJO))
        .then(
          () => console.log('Stored item!'),
          error => alert('Error storing item'+ error)
        );
       }
    }, 1000);


  }


  handleToggle() {
    this.menu = !this.menu;
  }

  handleWalletR() {
    this.menu = false;
    this.route.navigate(["dashboard/mywallet"]);
  }
  handleProfileR() {
    this.menu = false;
    this.route.navigate(["dashboard/myprofile"]);
  }
  handleChangeR() {
    this.menu = false;
    this.route.navigate(["dashboard/mychangeplan"]);
  }
  handleThriftR() {
    this.menu = false;
    this.route.navigate(["dashboard/mythrift"]);
  }
  handleTransactionR() {
    this.menu = false;
    this.route.navigate(["dashboard/mytransaction"]);
  }
  handleStatementR() {
    this.menu = false;
    this.route.navigate(["dashboard/mystatement"]);
  }
  handleShowme() {
    this.showdis = false;
  }
}
