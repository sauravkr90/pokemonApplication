import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { SearchedComponentComponent } from './searched-component/searched-component.component';

const routes: Routes = [{path:'searchedComponent',component:SearchedComponentComponent},
{path:'favourite',component:FavouriteComponent},{path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
