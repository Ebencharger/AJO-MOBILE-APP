import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.page.html',
  styleUrls: ['./mywallet.page.scss'],
})
export class MywalletPage implements OnInit {
   myBal:any;
   myCheck=true;
   AJO=[];
  constructor(private service:MyServiceService, private nativeStorage:NativeStorage, private route:Router) { }

  ngOnInit() {
    // if (localStorage.getItem("AJO")) {
    //    this.AJO=JSON.parse(localStorage.getItem('AJO'));
    // }
    setInterval(()=>{
      this.nativeStorage.getItem('AJO')
    .then(
      data => {
      this.AJO = JSON.parse(data),
      this.myBal=(this.AJO[0].user[this.service.id].balance)/560
      },
      error => {
        this.AJO = [
          { admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }], user: []  }
        ],
        this.nativeStorage.setItem("AJO", JSON.stringify(this.AJO)),
        error
      }
    );
    }, 10)
  }
    handleCashout(){
      this.myCheck=false;
    }
    handleClose(){
      this.myCheck=true;
    }
    handleRoute(){
      this.route.navigate(['dashboard/mycashout'])
    }
}
