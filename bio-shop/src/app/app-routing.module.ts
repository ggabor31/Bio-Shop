import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductsComponent } from './pages/products/products.component';
import { AuthGuard } from './shared/services/auth.guard';
import { ReviewRoutingModule } from './pages/review/review-routing.module';
const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'review',loadChildren: () => import('./pages/review/review.module').then(m => m.ReviewModule),
    canActivate: [AuthGuard]
  },
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  { path: 'my-profile', loadChildren: () => import('./pages/myprofile/myprofile.module').then(m => m.MyprofileModule),
    canActivate:[AuthGuard]
   },
  { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
