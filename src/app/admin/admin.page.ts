import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  AJO = [];
  totalAmount: any = 0
  user = [];
  myTrue = false;
  myAJO=[];
  constructor(private fb: FormBuilder, private nativeStorage: NativeStorage) {
    // this.AJO=JSON.parse(localStorage.getItem("AJO"));



  }
  forms = this.fb.group({ amount: ["", [Validators.required]] })
  get amount() {
    return this.forms.get('amount');
  }
  ngOnInit() {
    setInterval(() => {
      this.nativeStorage.getItem('AJO')
        .then(
          data => {
            this.AJO = JSON.parse(data);
              this.myAJO=this.AJO[0];
              console.log(this.myAJO);
          },
          error => {
            this.AJO = [
              { admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }], user: [] }
            ],
              this.nativeStorage.setItem("AJO", JSON.stringify(this.AJO)),
              error
          }
        );
    }, 5000)
  }
  handleGranted(i: any) {
    let { amount } = this.forms.value;
    //  let granted=`permission:"granted"`;
    if (this.AJO[0].balance > amount) {
      if (this.AJO[0].user[i].balance != 0) {
        this.AJO[0].user[i].permission = "granted"
        this.AJO[0].user[i].balance = this.AJO[0].user[i].balance + (Number(amount) * 560);
        this.AJO[0].user[i].credit = amount;
        this.nativeStorage.setItem("AJO", JSON.stringify(this.AJO))
          .then(
            () => console.log('Stored item!'),
            error => console.error('Error storing item', error)
          );
        this.totalAmount = this.totalAmount - Number(amount)
        alert(`USER WITH ID ${this.AJO[0].user[i].id} has been credited with ${amount}`)
      }
    }
    else {
      alert("THIS CAN NOT BE")
    }
  }
}
