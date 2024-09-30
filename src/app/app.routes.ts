import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {AddEditItemComponent} from "./add-edit-item/add-edit-item.component";

export const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,

  },
  {
    path: "home",
    component: HomeComponent,

  },
  {
    path: "auth",
    component: AuthComponent,
  },
  {
  path: "",
  redirectTo: "/dashboard",
    pathMatch:"full"
  }
];
