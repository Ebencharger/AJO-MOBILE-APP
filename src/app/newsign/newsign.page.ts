import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyServiceService } from '../my-service.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-newsign',
  templateUrl: './newsign.page.html',
  styleUrls: ['./newsign.page.scss'],
})
export class NewsignPage implements OnInit {
  myCountry: any;
  myCountryNo: any;
  ussd: any;
  my: any;
  date = new Date;
  v: any;
  day: any;
  user: any = [];
  countryIndex: any;
  AJO: any = [];
  newmonth: any;
  newdate: any;
  acctime: any;
  newuser: any = {};
  usercount = 0;
  showdis = false;
  chooseCountry = "";
  countryShow = false;
  constructor(public mycountry: MyServiceService, private fb: FormBuilder, private route: Router, private nativeStorage: NativeStorage, private emailComposer: EmailComposer) { }
  forms = this.fb.group(
    {
      fullname: ["", [Validators.required, Validators.pattern("^[A-Za-z]{1,100}[ X]{0,1}[A-Za-z]{0,100} [ X]{0,1}[A-Za-z]{0,100}[ X]{0,1}$")]],
      country: ["", [Validators.required]],
      phoneno: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern("^[A-Za-z0-9]{8,20}[@!#$^&*]{0,1}[A-Za-z0-9]{0,20}$")]],
      confirmPassword: ["", [Validators.required, Validators.pattern("^[A-Za-z0-9]{8,20}[@!#$^&*]{0,1}[A-Za-z0-9]{0,20}$")]]
    }
  );
  get fullname() {
    return this.forms.get('fullname');
  }
  get country() {
    return this.forms.get('country');
  }
  get phoneno() {
    return this.forms.get('phoneno');
  }
  get email() {
    return this.forms.get('email');
  }
  get password() {
    return this.forms.get('password');
  }
  get confirmPassword() {
    return this.forms.get('confirmPassword');
  }
  ngOnInit() {
    this.myCountry = this.mycountry.countryNumArray;
    this.myCountryNo = this.mycountry.countryNumArray;
    if (this.nativeStorage.getItem("AJO")) {
      this.v = this.nativeStorage.getItem("AJO");
      this.AJO = JSON.parse(this.v)
    }
    else {
      this.AJO = [
        { admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }] }
      ]
    }
    if (localStorage.getItem("AJO")) {
      this.v = localStorage.getItem("AJO");
      this.AJO = JSON.parse(this.v)
    }
    else {
      this.AJO = [
        { admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }] }
      ]
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
    else if (this.date.getMonth() >= 10) {
      this.newmonth = (this.date.getMonth()) + 1;
    }

    this.newmonth = this.newmonth;
    this.day = this.day;
    this.newdate = this.day + "-" + this.newmonth + "-" + this.date.getFullYear();
    this.acctime = this.date.getHours() + ":" + this.date.getMinutes();
    this.mycountry.date = this.newdate;
    this.mycountry.time = this.acctime;
  }

  handleOut() {
    this.chooseCountry = this.chooseCountry;
    console.log(this.chooseCountry);
    console.log(123);
    setTimeout(() => {
      this.countryShow = false;
    }, 1000);

  }

  handleCountry() {
    this.countryShow = true;
  }

  handleChoose(name: any, i: any) {
    this.countryIndex = i;
    this.chooseCountry = name;
    console.log(this.chooseCountry);
    this.countryShow = false;
    console.log(i);
    this.ussd = this.myCountryNo[i].dial_code;
    console.log(this.ussd);
  }

  handleSignUp() {
    alert();
    let { fullname, country, phoneno, email, password, confirmPassword } = this.forms.value;
    if (password == confirmPassword) {
      this.forms.get('fullname')?.setValue([""])
      this.forms.get('country')?.setValue([""])
      this.forms.get('phoneno')?.setValue([""])
      this.forms.get('email')?.setValue([""])
      this.forms.get('password')?.setValue([""])
      this.forms.get('confirmPassword')?.setValue([""])
      this.ussd = "";
      let acr = this.myCountryNo[this.countryIndex].code.toUpperCase();
      let uniq = "AJO"
      this.newuser = { id: uniq + "-" + acr + "-" + "00" + (this.usercount + 1), time: 0, name: fullname, email: email, phone: this.myCountryNo[this.countryIndex].dial_code + phoneno, country: country, password: password, timereg: this.mycountry.time, datereg: this.mycountry.date, balance: 0, regbalance: 0, driftplan: [], statement: [], transaction: [], link: false, day: this.day, countday: this.day, month: this.newmonth, countmonth: this.newmonth, year: this.date.getFullYear(), countyear: this.date.getFullYear() }
      this.user = this.newuser;
      this.AJO[0].user.push(this.user);
      localStorage.setItem("AJO", JSON.stringify(this.AJO))
      this.nativeStorage.setItem('AJO', JSON.stringify(this.AJO))
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
        let nemail = {
          to: email,
          subject: 'AJO',
          body: `Hi ${fullname}, welcome. This are your registration details, please keep them safe
          Password: ${password}. Thanks for joining Ajo`,
          isHtml: true
        }
    
        // Send a text message using default options
        this.emailComposer.open(nemail);
      this.showdis = true;

    }
    else {
      alert("Password and confirmPassword didn't match!")
    }
  }
  handleShowme() {
    this.showdis = false;
    this.route.navigate(['/login'])
  }
}
