import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { AccountComponent } from './components/account/account.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { PostComponent } from './components/post/post.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { PolicyComponent } from './components/policy/policy.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductnewComponent } from './components/productnew/productnew.component';
import { ProductupdateComponent } from './components/productupdate/productupdate.component';
import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductdeleteComponent } from './components/productdelete/productdelete.component';
import { PostnewComponent } from './components/postnew/postnew.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { PostupdateComponent } from './components/postupdate/postupdate.component';
import { PostdeleteComponent } from './components/postdelete/postdelete.component';
import { CustomerdetailComponent } from './components/customerdetail/customerdetail.component';
import { CustomerupdateComponent } from './components/customerupdate/customerupdate.component';
import { OrderupdateComponent } from './components/orderupdate/orderupdate.component';
import { WorkshopdetailComponent } from './components/workshopdetail/workshopdetail.component';
import { WorkshopupdateComponent } from './components/workshopupdate/workshopupdate.component';
import { Page404notfoundComponent } from './components/page404notfound/page404notfound.component';

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
  {path: '**', component: Page404notfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
