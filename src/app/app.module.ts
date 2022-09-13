
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AuthGuard } from './authGuard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authGuard/authInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [AuthGuard, [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
