import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import {ClientLoginPanelComponent} from './client-login-panel/client-login-panel.component'
import {AdminLoginPanelComponent} from './admin-login-panel/admin-login-panel.component'

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'user_login_panel', component:ClientLoginPanelComponent},
  {path: 'admin_login_panel', component:AdminLoginPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
