import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.page.html',
  styleUrls: ['./retrieve.page.scss'],
})
export class RetrievePage implements OnInit {

  constructor(private route2:Router, private fb:FormBuilder) { }
  forms=this.fb.group({email:["", [Validators.required]], password:["", [Validators.required, Validators.pattern("^[A-Za-z0-9]{8,20}[@!#$^&*]{0,1}[A-Za-z0-9]{0,20}$")]], confirmPassword:["", [Validators.required, Validators.pattern("^[A-Za-z0-9]{8,20}[@!#$^&*]{0,1}[A-Za-z0-9]{0,20}$")]]})
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
  }

  handleChange(){
    let{email, password, confirmPassword}=this.forms.value;
    password==confirmPassword?this.route2.navigate(['/login']):[alert("Password do not match!"),this.forms.get('password')?.setValue([""]),
    this.forms.get('confirmPassword')?.setValue([""])]
  }

}
