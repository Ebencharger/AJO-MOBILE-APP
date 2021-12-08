import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupPipe } from './signup.pipe';
import { Angular4PaystackModule } from 'angular4-paystack';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@NgModule({
  declarations: [AppComponent, SignupPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     Angular4PaystackModule.forRoot('pk_test_b151276bd6786f5c094f1c35d7ee0008f073fb2d'),
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Camera,NativeStorage, EmailComposer],
  bootstrap: [AppComponent],
})
export class AppModule {}
