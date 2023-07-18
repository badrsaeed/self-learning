import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {Routes} from '@angular/router'
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { HomeComponent } from "./home/home.component";

const appRoutes:Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'**', component:NotfoundComponent}

]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
