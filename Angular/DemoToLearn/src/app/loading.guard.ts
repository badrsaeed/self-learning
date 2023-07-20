import { Component, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanDeactivate,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingGuard implements CanDeactivate<HomeComponent> {
  canDeactivate(
    component: HomeComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (window.confirm('loading in progress, Do You want to leave ??'))
      return true;
    return false;
  }
}
