import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-newsign',
  templateUrl: './newsign.page.html',
  styleUrls: ['./newsign.page.scss'],
})
export class NewsignPage implements OnInit {
  myCountry:any;
  myCountryNo:any;
  ussd:any;
  my:any;
  chooseCountry="";
  countryShow=false;
  constructor(public mycountry:MyServiceService) { }

  ngOnInit() {
    this.myCountry=this.mycountry.countryNumArray;
    this.myCountryNo=this.mycountry.countryNumArray;
  }

  handleOut(){
    this.chooseCountry=this.chooseCountry;
    console.log(this.chooseCountry);
    console.log(123);
    setTimeout(() => {
      this.countryShow=false;
    }, 1000);
    
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
}
