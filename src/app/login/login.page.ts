import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id: any;
  message:any;
  constructor(private route: ActivatedRoute, private route2:Router, private fb:FormBuilder) { }
  forms=this.fb.group({email:["", [Validators.required, Validators.email]], password:["", [Validators.required, Validators.pattern("^[A-Za-z0-9]{8,20}[@!#$^&*]{0,1}[A-Za-z0-9]{0,20}$")]]})
  get email(){
    return this.forms.get('email');
  }
  get password(){
    return this.forms.get('password');
  }
  ngOnInit() {
    this.handleGen();
  }
 
  handleGen(){
    localStorage.setItem("mydata", "hello");
    let hi=((localStorage.getItem("mydata")));
    this.message=hi;
    console.log(this.message);
    
  }

  handleCreate(){
    this.forms.get('email')?.setValue([""]);
    this.forms.get('password')?.setValue([""]);
  }
  
}





