import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TeamComponent } from './team/team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { AuthGuard } from './auth.guard';
import { childrenGuard } from './children.guard';
import { LoadingGuard } from './loading.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canDeactivate: [LoadingGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  {
    path: 'team',
    component: TeamComponent,
    canActivateChild: [childrenGuard],
    children: [
      { path: '', redirectTo: 'add', pathMatch: 'full' },
      { path: 'add', component: AddTeamComponent },
      { path: 'edit', component: EditTeamComponent },
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
