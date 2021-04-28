import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './auto/sign-in/sign-in.component';
import { RegisterUserComponent } from './auto/register-user/register-user.component';
import { ForgotPasswordComponent } from './auto/forgot-password/forgot-password.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { RebateFormComponent } from './pages/rebate-form/rebate-form.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { FilterPipe } from './core/filter.pipe';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { UsersComponent } from './pages/users/users.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PostsComponent } from './pages/users/posts/posts.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterUserComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RebateFormComponent,
    PhotosComponent,
    FilterPipe,
    SpinnerComponent,
    UsersComponent,
    PostsComponent,
    UserListComponent,
  ],
  imports: [
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    DragDropModule,
    MatMenuModule,
    MatExpansionModule,
    MatCardModule,
    MatSelectModule,
    MatStepperModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatTabsModule,
    MatPaginatorModule,


    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
