import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Page404notfoundComponent } from './page404notfound/page404notfound.component';
import { PolicyTermsComponent } from './policy-terms/policy-terms.component';

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
