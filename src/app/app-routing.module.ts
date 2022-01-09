import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {HomeNavigationComponent} from "./components/home-navigation/home-navigation.component";
import {UserStatisticsComponent} from "./components/user-statistics/user-statistics.component";
import {
  UserStatisticsExpandedComponent
} from "./components/user-statistics-expanded/user-statistics-expanded.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/home',
    component: HomeNavigationComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user/stats',
        component: UserStatisticsComponent
      },
      {
        path: 'user/stats/expanded',
        component: UserStatisticsExpandedComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
