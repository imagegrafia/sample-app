import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserTableComponent } from './user-table/user-table.component';
import { RegisterComponent } from './register/register.component';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from './shared.service';

export const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'shop',component: ShopComponent},
  {path: 'login',component: LoginComponent},
  {path: 'user',component: UserCardComponent},
  {path: 'user-table', component: UserTableComponent},
  {path: 'register', component: RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(private sharedService:SharedService){
    this.sharedService.allAppRoutes.next(routes);
  }
}
