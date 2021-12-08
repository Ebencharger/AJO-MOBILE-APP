import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id: any;
  message:any;
  v:any;
  showm=false;
  AJO:any=[]
  constructor(private nativeStorage:NativeStorage, public service:MyServiceService, private route: ActivatedRoute, private route2:Router, private fb:FormBuilder) { }
  forms=this.fb.group({email:["", [Validators.required, Validators.email]], password:["", [Validators.required, Validators.pattern("^[A-Za-z0-9]{8,20}[@!#$^&*]{0,1}[A-Za-z0-9]{0,20}$")]]})
  get email(){
    return this.forms.get('email');
  }
  get password(){
    return this.forms.get('password');
  }
  ngOnInit() {
    if (this.nativeStorage.getItem("AJO")) {
      this.v = this.nativeStorage.getItem("AJO");
      this.AJO = JSON.parse(this.v)
    }
    else {
      this.AJO = [
        { admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }], user: [] }
      ]
    }
    if (localStorage.getItem("AJO")) {
      this.v = localStorage.getItem("AJO");
      this.AJO = JSON.parse(this.v)
    }
    else {
      this.AJO = [
        { admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }], user: [] }
      ]
    }
  }
 

  handleLogin(){
    let {email, password}=this.forms.value;
    if (this.AJO[0].user != "") {
      for (let i = 0; i < this.AJO[0].user.length; i++) {
        if (this.AJO[0].user[i].email == email && this.AJO[0].user[i].password == password) {
          this.service.loginUser = this.AJO[0].user[i];
          this.service.id = i;
          if (this.AJO[0].user[i].driftplan != "") {
            this.service.amount = this.AJO[0].user[i].driftplan[0].amount;
          }
          this.route2.navigate([`/dashboard`])
          this.showm = true;
          setTimeout(() => {
            this.showm = false;
          }, 100);
          return;
        }
        else if (i == this.AJO[0].user.length - 1 && this.AJO[0].user[i].email == email && this.AJO[0].user[i].password != password && this.showm == false) {
          this.forms.get('password')?.setValue([""]);
        }
        else if (this.AJO[0].user[i].email != email && this.AJO[0].user[i].password == password) {
          this.forms.get('email')?.setValue(["INVALID EMAIL!"]);
        }
        else if (this.AJO[0].user[i].email != email && this.AJO[0].user[i].password != password) {
          this.forms.get('email')?.setValue(["INVALID EMAIL!"]);
          this.forms.get('password')?.setValue([""]);
        }
      }

    }
    else {
      console.log("heyyyy");

      this.forms.get('phone')?.setValue(["INVALID PHONE NUMBER!"]);
      this.forms.get('password')?.setValue([""]);
    }
    // if (email==email && password==password) {
      
    // }else if(){
    //   this.forms.get('email')?.setValue([""]);
    // this.forms.get('password')?.setValue([""]);
    // this.route2.navigate(["/dashboard"]);
    // }
  }
  
}





