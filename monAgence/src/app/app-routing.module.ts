import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
