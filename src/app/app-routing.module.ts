import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { UserCardComponent } from './user-card/user-card.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'shop',component: ShopComponent},
  {path: 'login',component: LoginComponent},
  {path: 'user',component: UserCardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
