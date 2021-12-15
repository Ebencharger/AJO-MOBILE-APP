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
  constructor(private nativeStorage:NativeStorage, public service:MyServiceService) {

   }

  ngOnInit() {
    setInterval(()=>{
      this.nativeStorage.getItem('AJO')
    .then(
      data => {
      this.AJO = JSON.parse(data)
      },
      error => console.log(error)
      
    );
    }, 10)
  }

}
