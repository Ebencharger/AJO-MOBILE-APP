import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  myCountry:any;
  myCountryNo:any;
  ussd:any;
  my:any;
  chooseCountry="";
  countryShow=false;
  constructor(public mycountry:MyServiceService, private route:Router) { }

  ngOnInit() {
  this.myCountry=this.mycountry.countryArray;
  this.myCountryNo=this.mycountry.countryNumArray;
  
  }

  handleCountry(){
    this.countryShow=true;
  }

  handleChoose(name:any, i:any){
    this.chooseCountry=name;
    console.log(this.chooseCountry);
    this.countryShow=false;
    console.log(i);
    this.ussd=this.myCountryNo[i].dial_code;
    console.log(this.ussd);

    
  }

  handleOut(){
    this.chooseCountry=this.chooseCountry;
    console.log(this.chooseCountry);
    console.log(123);
    setTimeout(() => {
      this.countryShow=false;
    }, 1000);
    
  }

  handleLogin(){
    this.route.navigate(["/login"])
  }
  

}
