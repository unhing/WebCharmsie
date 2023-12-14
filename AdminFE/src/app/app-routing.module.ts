import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { ContactformComponent } from './contactform/contactform.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { PostComponent } from './post/post.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { PolicyComponent } from './policy/policy.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'products', component: ProductsComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'account', component: AccountComponent},
  {path: 'admin', component: AdminComponent},
  {path:'customer', component: CustomerComponent},
  {path: 'order', component: OrderComponent},
  {path: 'post', component: PostComponent},
  {path: 'workshop', component: WorkshopComponent},
  {path:'contactform', component: ContactformComponent},
  {path: 'policy', component: PolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
