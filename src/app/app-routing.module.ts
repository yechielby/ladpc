import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auto/sign-in/sign-in.component';
import { RegisterUserComponent } from './auto/register-user/register-user.component';
import { ForgotPasswordComponent } from './auto/forgot-password/forgot-password.component';
import { HomeComponent } from './core/home/home.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/users/posts/posts.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { RebateFormComponent } from './pages/rebate-form/rebate-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'rebate', component: RebateFormComponent },

  { path: 'photos', component: PhotosComponent },
  { path: 'users', component: UsersComponent,
    children:[
      { path: '', component: UserListComponent },
      { path: ':id/posts', component: PostsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
