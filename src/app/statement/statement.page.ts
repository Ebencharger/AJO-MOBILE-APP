import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.page.html',
  styleUrls: ['./statement.page.scss'],
})
export class StatementPage implements OnInit {
  AJO=[];
  user=[];
  constructor(private nativeStorage:NativeStorage, public service:MyServiceService) { }

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
