import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AppService } from './service/app.service';
import { AuthService } from './shared/services/auth.service';
import { InterceptorModule } from './shared/services/interceptor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InterceptorModule,
    HttpClientModule,
  ],
  providers: [
    AppService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
