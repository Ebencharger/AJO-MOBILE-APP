import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  v:any;
  AJO:any;
  user=[];
  constructor(private nativeStorage:NativeStorage, public service:MyServiceService) {
  
   }

  ngOnInit() {
      this.nativeStorage.getItem('AJO')
    .then(
      data => {
      this.AJO = JSON.parse(data)
      },
      error => console.log(error)
    );
    setTimeout(() => {
      this.user=this.AJO[0].user;
    }, 500);
  }

}
