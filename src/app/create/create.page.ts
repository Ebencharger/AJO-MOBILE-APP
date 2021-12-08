import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  myCountry:any;
  myCountryNo:any;
  ussd:any;
  my:any;
  chooseCountry="";
  countryShow=false;
  constructor(public mycountry:MyServiceService, private fb:FormBuilder, private route:Router) { }
  forms=this.fb.group(
    {
      fullname:["", [Validators.required, Validators.pattern("^[A-Za-z]{1,100}[ X]{0,1}[A-Za-z]{0,100} [ X]{0,1}[A-Za-z]{0,100}[ X]{0,1}$")]],
      country:["", [Validators.required]],
      phoneno:["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required, Validators.pattern("^[A-Za-z0-9]{8,20}[@!#$^&*]{0,1}[A-Za-z0-9]{0,20}$")]],
      confirmPassword:["",[Validators.required, Validators.pattern("^[A-Za-z0-9]{8,20}[@!#$^&*]{0,1}[A-Za-z0-9]{0,20}$")]]
    }
    );
  get fullname(){
    return this.forms.get('fullname');
  }
  get country(){
    return this.forms.get('country');
  }
  get phoneno(){
    return this.forms.get('phoneno');
  }
  get email(){
    return this.forms.get('email');
  }
  get password(){
    return this.forms.get('password');
  }
  get confirmPassword(){
    return this.forms.get('confirmPassword');
  }
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

  handleSignUp(){
    let{fullname,country, phoneno, email, password,confirmPassword}=this.forms.value
    if (password==confirmPassword) {
      this.route.navigate(['/login'])
      this.forms.get('fullname')?.setValue([""])
      this.forms.get('country')?.setValue([""])
      this.forms.get('phoneno')?.setValue([""])
      this.forms.get('email')?.setValue([""])
      this.forms.get('password')?.setValue([""])
      this.forms.get('confirmPassword')?.setValue([""])
      this.ussd="";
    }
    else{
      alert("Password and confirmPassword didn't match!")
    }
  }
}
