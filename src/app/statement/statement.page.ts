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
  constructor(private nativeStorage:NativeStorage, public service:MyServiceService) { }

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
