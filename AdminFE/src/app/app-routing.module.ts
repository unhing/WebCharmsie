import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { ContactformComponent } from './contactform/contactform.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { PostComponent } from './post/post.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { PolicyComponent } from './policy/policy.component';
import { AdminComponent } from './admin/admin.component';
import { ProductnewComponent } from './productnew/productnew.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductdeleteComponent } from './productdelete/productdelete.component';
import { PostnewComponent } from './postnew/postnew.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { PostupdateComponent } from './postupdate/postupdate.component';
import { PostdeleteComponent } from './postdelete/postdelete.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { OrderupdateComponent } from './orderupdate/orderupdate.component';
import { WorkshopdetailComponent } from './workshopdetail/workshopdetail.component';
import { WorkshopupdateComponent } from './workshopupdate/workshopupdate.component';

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'product', component: ProductsComponent},
  {path: 'account', component: AccountComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/:id', component: CustomerdetailComponent},
  {path: 'customer/update/:id', component: CustomerupdateComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order/:id', component: OrderdetailsComponent},
  {path: 'order/update/:id', component: OrderupdateComponent},
  {path: 'post', component: PostComponent},
  {path: 'post/new', component: PostnewComponent},
  {path: 'post/:id', component: PostdetailComponent},
  {path: 'post/update/:id', component: PostupdateComponent},
  {path: 'post/delete/:id', component: PostdeleteComponent},
  {path: 'workshop', component: WorkshopComponent},
  {path: 'workshop/:id', component: WorkshopdetailComponent},
  {path: 'workshop/update/:id', component: WorkshopupdateComponent},
  {path: 'contactform', component: ContactformComponent},
  {path: 'policy', component: PolicyComponent},
  {path: 'product/new', component: ProductnewComponent},
  {path: 'product/:id', component: ProductdetailsComponent},
  {path: 'product/delete/:id', component: ProductdeleteComponent},
  {path: 'product/update/:id', component: ProductupdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
