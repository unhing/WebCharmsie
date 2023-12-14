import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { ContactformComponent } from './contactform/contactform.component';
import { OrderComponent } from './order/order.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { AccountComponent } from './account/account.component';
import { CustomerComponent } from './customer/customer.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    CategoryComponent,
    ContactformComponent,
    OrderComponent,
    PostComponent,
    AdminComponent,
    WorkshopComponent,
    AccountComponent,
    CustomerComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
