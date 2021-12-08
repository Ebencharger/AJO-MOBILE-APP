import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mysignup',
  templateUrl: './mysignup.page.html',
  styleUrls: ['./mysignup.page.scss'],
})
export class MysignupPage implements OnInit {
  constructor(private fb: FormBuilder, private route: Router) { }
  forms = this.fb.group({ email: ["", [Validators.required, Validators.email]] })
  get email() {
    return this.forms.get('email');
  }
  ngOnInit() {

  }

  handleToken() {
    this.route.navigate(['/retrieve']);
     this.forms.get('email')?.setValue([""])
  }

}
