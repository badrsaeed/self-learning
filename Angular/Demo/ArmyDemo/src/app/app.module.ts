import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestDemoComponent } from './Componenets/test-demo/test-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsComponent } from './Componenets/items/items.component';
import { ItemDetailsComponent } from './Componenets/item-details/item-details.component';
import { SvgComponent } from './Componenets/svg/svg.component';
import { HighlighterDirective } from './Highlight.Directive';
import { RandomColorsDirective } from './Componenets/random-colors.directive';
import { DashboardComponent } from './Componenets/dashboard/dashboard.component';
import { DefaultImagePipe } from './Componenets/default-image.pipe';
import { DynamicFormComponent } from './Componenets/dynamic-form/dynamic-form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestDemoComponent,
    ItemsComponent,
    ItemDetailsComponent,
    SvgComponent,
    HighlighterDirective,
    RandomColorsDirective,
    DashboardComponent,
    DefaultImagePipe,
    DynamicFormComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
