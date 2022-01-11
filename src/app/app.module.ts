import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./components/login/login.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import '@angular/material';
import { HomeComponent } from './components/home/home.component';
import {AuthInterceptorService} from "./services/auth-interceptor.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeNavigationComponent } from './components/home-navigation/home-navigation.component';
import { UserStatisticsComponent } from './components/user-statistics/user-statistics.component';
import { ChartsModule } from 'ng2-charts';
import { UserStatisticsExpandedComponent } from './components/user-statistics-expanded/user-statistics-expanded.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeNavigationComponent,
    UserStatisticsComponent,
    UserStatisticsExpandedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule,
    FlexLayoutModule,
    MatSnackBarModule,
    ChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
