import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-mythrift',
  templateUrl: './mythrift.page.html',
  styleUrls: ['./mythrift.page.scss'],
})
export class MythriftPage implements OnInit {

  mylast = "DOLLAR";
  array = [{ do: "DOLLAR", value: "$" }, { do: "EURO", value: "£" }, { do: "NAIRA", value: "#" }]
  show = false;
  curry: any;
  mybalance: any;
  showdis = true;
  showme = false;
  mustset= false;
  ref:any;
  v: any;
  AJO: any;
  true = true;
  display = false;
  driftPlan = "";
  driftAmount:any;
  dollar = "$";
  reference = '';
  title:any;
  constructor(public myservice:MyServiceService, private route: Router, private fb: FormBuilder, private nativeStorage:NativeStorage) { }
  myForms=this.fb.group({myDrift:["", [Validators.email]]})
  get myDrift(){
    return this.myForms.get("myDrift");
  }

  user: any = [];
  users: any;
  day: any;
  dayname:any;
  date = new Date;
  newmonth: any;
  newdate: any;
  acctime: any;
  balance:any;
  ngOnInit(): void {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    if (localStorage.getItem("AJO")) {
      console.log("YES");
      this.v = localStorage.getItem("AJO");
      this.AJO = JSON.parse(this.v);
    }
    if (this.nativeStorage.getItem("AJO")) {
      console.log("YES");
      this.v = this.nativeStorage.getItem("AJO");
      this.AJO = JSON.parse(this.v);
    }
    console.log(this.driftAmount);
    if (this.AJO[0].user[this.myservice.id].driftplan == "") {
      this.mustset = true;
    }
    else {
      this.mustset = false;
    }
    this.dayname=this.myservice.dayarray[this.date.getDay()];
    this.curry = this.mylast;
    this.users = this.myservice.loginUser;
    this.balance = this.AJO[0].user[this.myservice.id].balance;
    // this.mybalance = this.AJO[0].bankaccount[0].balance;
    if (this.AJO[0].user[this.myservice.id].driftplan == "") {
      this.driftPlan = "";
    }
    else {
      this.driftPlan = this.AJO[0].user[this.myservice.id].driftplan[0].type + "-" + this.AJO[0].user[this.myservice.id].driftplan[0].drift;
      this.driftAmount=this.AJO[0].user[this.myservice.id].driftplan[0].amount
    }

    if (this.date.getDate() < 10) {
      this.day = "0" + this.date.getDate();
    }
    else if (this.date.getDate() > 10) {
      this.day = this.date.getDate();
    }
    if (this.date.getMonth() < 10) {
      this.newmonth = "0" + (this.date.getMonth() + 1);
    }
    else if (this.date.getDate() >= 10) {
      this.newmonth = (this.date.getMonth()) + 1;
    }
    this.newdate = this.day + "-" + this.newmonth + "-" + this.date.getFullYear();
    this.acctime = this.date.getHours() + ":" + this.date.getMinutes();
    console.log(this.AJO[0].user[this.myservice.id].statement.length);

    if (this.AJO[0].user[this.myservice.id].driftplan != "") {
      if (this.AJO[0].user[this.myservice.id].driftplan[0].drift == "MONTHLY" && this.AJO[0].user[this.myservice.id].statement != "") {
        if (this.AJO[0].user[this.myservice.id].statement.length > 1) {
          if (((this.date.getMonth()+1)  != (Number(this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].date.substring(3,5))))  && ((this.date.getDate())  == (Number(this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].date.substring(0, 2))))) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].date.substring(3,5))));
          }
          else {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].date.substring(3,5))));
          }
        }
        else if ((this.AJO[0].user[this.myservice.id].statement.length == 1)) {
       if (((this.date.getMonth()+1) != (Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(3,5)))) && ((this.date.getDate())  == (Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(0, 2)))) ) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(3,5))));
          }
          else if (((this.date.getMonth()+1)  == (Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(3,5)))) && ((this.date.getDate())  == (Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(0, 2))))) {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(3,5))));
          }
        }
      }
      if (this.AJO[0].user[this.myservice.id].driftplan[0].drift == "WEEKLY" && this.AJO[0].user[this.myservice.id].statement != "") {
        if (this.AJO[0].user[this.myservice.id].statement.length > 1) {
          if ((this.date.getDate() != (Number(this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].date.substring(0, 2)))) && (this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].day==this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].checkday)) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].date.substring(0, 2))));
          }
          else {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].date.substring(0, 2))));
          }
        }
        else if ((this.AJO[0].user[this.myservice.id].statement.length == 1)) {
          if ((this.date.getDate() != (Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(0, 2)))) && (this.AJO[0].user[this.myservice.id].statement[0].day==this.AJO[0].user[this.myservice.id].statement[0].checkday)) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(0, 2))));
          }
          else if ((this.date.getDate() != (Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(0, 2)))) && (this.AJO[0].user[this.myservice.id].statement[0].day!=this.AJO[0].user[this.myservice.id].statement[0].checkday)) {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(0, 2))));
          }
        }
      }
      if (this.AJO[0].user[this.myservice.id].driftplan[0].drift == "DAILY" && this.AJO[0].user[this.myservice.id].statement != "") {
        if (this.AJO[0].user[this.myservice.id].statement.length > 1) {
          if (this.date.getDate() != (Number(this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].date.substring(0, 2)))) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].date.substring(0, 2))));
          }
          else {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[this.AJO[0].user[this.myservice.id].statement.length - 1].date.substring(0, 2))));
          }
        }
        else if ((this.AJO[0].user[this.myservice.id].statement.length == 1)) {
          if (this.date.getDate() != (Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(0, 2)))) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(0, 2))));
          }
          else if (this.date.getDate() == (Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(0, 2)))) {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.myservice.id].statement[0].date.substring(0, 2))));
          }
        }
      }

    }
    else if (this.AJO[0].user[this.myservice.id].driftplan == "") {
      this.mustset = true;
    }
  }

  drift() {
    let driftSta = { amountDrif: this.driftAmount, time: this.acctime, date: this.newdate, day:this.dayname, checkday:this.dayname, ref:this.ref};
    this.AJO[0].user[this.myservice.id].balance = (Number(this.driftAmount)) + this.AJO[0].user[this.myservice.id].balance;
    this.AJO[0].user[this.myservice.id].statement.push(driftSta);
    localStorage.setItem("AJO", JSON.stringify(this.AJO));
    this.nativeStorage.setItem('AJO', JSON.stringify(this.AJO))
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
    this.route.navigate(['dashboard/balance'])
  }

  showmme() {
    this.showdis = true;
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.ref=ref;
    this.drift()
  }

  paymentCancel() {
    this.showdis=false;
  }
}
