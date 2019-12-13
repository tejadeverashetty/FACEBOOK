import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginInfoComponent } from "./login-info/login-info.component";
import {  LoginComponent} from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { AfterloginComponent } from "./afterlogin/afterlogin.component";
import { ProfileComponent } from './profile/profile.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';


const routes: Routes = [
  {
    path:'login-info',
    component:LoginInfoComponent
  },
  { path: '',
   redirectTo: '/login-info',
    pathMatch: 'full'},
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent
  },
  {
    path:'afterlogin',
    component:AfterloginComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'my-profile',
    component:MyProfileComponent
  },
  {
    path:'friends',
    component:FriendsComponent
  },
  {
    path:'photos',
    component:PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
