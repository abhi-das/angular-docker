import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { UserService } from './user.service';
import {CardModule} from 'primeng/card';

import { ButtonModule } from 'primeng/button';
import { UserCardComponent } from './user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
