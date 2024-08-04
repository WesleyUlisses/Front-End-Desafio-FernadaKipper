import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../user-portal/views/login/login.component';
import { RegisterComponent } from '../../user-portal/views/register/register.component';
import { NewPasswordScreenComponent } from '../../user-portal/views/new-password-screen/new-password-screen.component';
import { HomeComponent } from '../../user-portal/views/home/home.component';
import { ForgotPasswordComponent } from '../../user-portal/views/forgot-password/forgot-password.component';
import { authGuard } from '../../shared/services/guard/auth/auth.guard';
import { ProfileComponent } from '../../user-portal/views/home/profile/profile.component';
import { DashboardChartsComponent } from '../../user-portal/views/home/dashboard-charts/dashboard-charts.component';
import { LandingPageComponent } from '../../shared/views/landing-page/landing-page.component';
import { SupportYouPageComponent } from '../../shared/views/support-you-page/support-you-page.component';
import { BlogComponent } from '../../blog/views/blog/blog.component';
import { PostViewComponent } from '../../blog/views/blog/post-view/post-view.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', component: LandingPageComponent },
  {
    path: 'home', canActivate: [authGuard], children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'dashboard-charts', component: DashboardChartsComponent }
    ]
  },
  { path: 'new-password', component: NewPasswordScreenComponent },
  { path: 'apoio', component: SupportYouPageComponent },
  {
    path: 'blog', component: BlogComponent, children: [
      {
        path: 'post/:id',
        component: PostViewComponent
      }
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];
