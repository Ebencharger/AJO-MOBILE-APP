import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-changepla',
  templateUrl: './changepla.page.html',
  styleUrls: ['./changepla.page.scss'],
})
export class ChangeplaPage implements OnInit {
  myplan=0;
  v:any;
  AJO:any=[];
 showdis=true;
 timecount:any;
  constructor(private route:Router, private fb:FormBuilder, public service:MyServiceService, private nativeStorage:NativeStorage) { }
  forms=this.fb.group({type:["", [Validators.required]], drift:["", [Validators.required]], amount:["", Validators.required]});
  get type(){
    return this.forms.get('type')
  }
  get drift(){
    return this.forms.get('drift')
  }
  get amount(){
    return this.forms.get('amount')
  }
  ngOnInit(): void {
    // if (localStorage.getItem("AJO")) {
    //   console.log("YES");
    //   this.v=localStorage.getItem("AJO");
    //   this.AJO=JSON.parse(this.v);
    // }
    // if (this.nativeStorage.getItem("AJO")) {
    //   console.log("YES");
    //   this.v=this.nativeStorage.getItem("AJO");
    //   this.AJO=JSON.parse(this.v);
    // }
    this.nativeStorage.getItem('AJO')
    .then(
      data => {
        this.AJO = JSON.parse(data),
        this.timecount=this.AJO[0].user[this.service.id].driftplan
      },
      error => {
        this.AJO = [
          { admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }], user: []  }
        ],
        this.nativeStorage.setItem("AJO", JSON.stringify(this.AJO)),
        error
      }
    );
  }
  changeme(params:any){
   if (this.myplan==3) {
    this.myplan+0;
    this.showdis=false;
    console.log(this.myplan);
   }
   else{
    this.myplan++
    console.log(this.myplan);
   }
   
   if (this.timecount!="" && this.AJO[0].user[this.service.id].countyear==this.AJO[0].user[this.service.id].year) {
    this.myplan=0;
    console.log(this.myplan);
  }
  else if (this.timecount=="" && this.AJO[0].user[this.service.id].countyear==this.AJO[0].user[this.service.id].year) {
    this.myplan=this.myplan
  } 
 
  }
setup(){
    let{type,drift,amount}=this.forms.value;
    amount.substring(2);
    let drifttype={type:type, drift:drift, amount:amount}
    console.log(drifttype);
    this.AJO[0].user[this.service.id].time++
    this.service.amount=amount;
  this.AJO[0].user[this.service.id].driftplan.push(drifttype);
  localStorage.setItem("AJO",JSON.stringify(this.AJO));
  this.nativeStorage.setItem('AJO', JSON.stringify(this.AJO))
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
  this.showdis=false;
}

showme(){
  this.showdis=true;
  this.route.navigate(['dashboard'])
}

}
