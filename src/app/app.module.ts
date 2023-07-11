import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegistrationComponent } from './user/registration/registration.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './user/login/login.component';
import { AddEntryComponent } from './dashboard/add-record/add-entry.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ViewEntriesComponent } from './dashboard/view-records/view-entries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JwtInterceptor } from './services/jwt-interceptor';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AddEntryComponent,
    ViewEntriesComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ApiService, 
    HttpClientModule,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
