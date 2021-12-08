import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.page.html',
  styleUrls: ['./mywallet.page.scss'],
})
export class MywalletPage implements OnInit {
   myBal:any;
  constructor(private service:MyServiceService) { }

  ngOnInit() {
    this.myBal=this.service.loginUser.balance;
  }

}
