import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TopComponent } from './top/top.component';
import { ButtonComponent } from './button/button.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    TopComponent,
    ButtonComponent,
    ListComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
