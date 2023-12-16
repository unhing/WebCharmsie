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
import { CategorynewComponent } from './categorynew/categorynew.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';
import { ProductnewComponent } from './productnew/productnew.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

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
  {path: 'policy', component: PolicyComponent},
  {path: 'categorynew', component: CategorynewComponent},
  {path:'categorydetails', component: CategorydetailsComponent},
  {path: 'categoryupdate', component: CategoryupdateComponent},
  {path: 'productnew', component: ProductnewComponent},
  {path:'productupdate', component: ProductupdateComponent},
  {path:'orderdetails', component: OrderdetailsComponent},
  {path: 'productdetails', component: ProductdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
