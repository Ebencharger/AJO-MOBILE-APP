import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  AJO: any = [];
  constructor(private nativeStorage: NativeStorage) {
    // if (localStorage.getItem("AJO")) {
    //   console.log("YES");
    // }
    // else{
    //   this.AJO=[
    //     {userct:0,admin:[{id:"AJO-ADMIN", password:"ajowill@2021"}], user:[]}
    //   ]
    //   localStorage.setItem("AJO", JSON.stringify(this.AJO));
    // }
    // if (this.nativeStorage.getItem("AJO")) {
    //   console.log("YES");
    // }
    // else {
    //   this.AJO = [
    //     { userct: 0, admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }], user: [] }
    //   ]
    //   this.nativeStorage.setItem("AJO", JSON.stringify(this.AJO));
    // }
  // this.nativeStorage.remove("AJO");
    this.nativeStorage.getItem('AJO')
      .then(
        data => {
         this.AJO = JSON.parse(data)
        },
        error => {
          this.AJO = [
            {balance:0, admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }],  user: []  }
          ],
          this.nativeStorage.setItem("AJO", JSON.stringify(this.AJO)),
          error
        }
      );
  }
}
