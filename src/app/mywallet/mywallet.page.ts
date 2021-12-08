import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.page.html',
  styleUrls: ['./mywallet.page.scss'],
})
export class MywalletPage implements OnInit {
   myBal:any;
   AJO=[];
  constructor(private service:MyServiceService, private nativeStorage:NativeStorage) { }

  ngOnInit() {
    setInterval(()=>{
      this.nativeStorage.getItem('AJO')
    .then(
      data => {
      this.AJO = JSON.parse(data)
      },
      error => {
        this.AJO = [
          { admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }], user: []  }
        ],
        this.nativeStorage.setItem("AJO", JSON.stringify(this.AJO)),
        error
      }
    );
      console.log(JSON.stringify(this.AJO[0])); 
      this.myBal=(this.AJO[0].user[this.service.id].balance)/560;
    }, 10)
  }

}
