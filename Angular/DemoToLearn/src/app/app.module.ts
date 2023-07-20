import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDemoComponent } from './test-demo/test-demo.component';
import { ItemsComponent } from './items/items.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { HighlightDirective } from './highlight.directive';
import { ChangeStyleDirective } from './change-style.directive';
import { DefaultImage } from './default-image.pipe';
import { SumingPipe } from './suming.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TeamComponent } from './team/team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TestDemoComponent,
    ItemsComponent,
    ItemsDetailsComponent,
    HighlightDirective,
    ChangeStyleDirective,
    DefaultImage,
    SumingPipe,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NotfoundComponent,
    TeamComponent,
    AddTeamComponent,
    EditTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
