import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Page404notfoundComponent } from './components/page404notfound/page404notfound.component';
import { PolicyTermsComponent } from './components/policy-terms/policy-terms.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: 'workshop', component: WorkshopComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'customer', component: UserAccountComponent },
  { path: 'myorder', component: UserOrdersComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'policy', component: PolicyTermsComponent },
  { path: '**', component: Page404notfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
