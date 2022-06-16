import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:"", component:HomeComponent
},{
path:"products/:id", component : HomeDetailsComponent
},{
  path:"cart", component:CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
