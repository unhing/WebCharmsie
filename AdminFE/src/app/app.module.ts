import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
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
import { CategorynewComponent } from './categorynew/categorynew.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';
import { ProductnewComponent } from './productnew/productnew.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductdeleteComponent } from './productdelete/productdelete.component';
import { PostnewComponent } from './postnew/postnew.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { PostupdateComponent } from './postupdate/postupdate.component';
import { PostdeleteComponent } from './postdelete/postdelete.component';

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
    PolicyComponent,
    CategorynewComponent,
    CategorydetailsComponent,
    CategoryupdateComponent,
    ProductnewComponent,
    ProductupdateComponent,
    OrderdetailsComponent,
    ProductdetailsComponent,
    ProductdeleteComponent,
    PostnewComponent,
    PostdetailComponent,
    PostupdateComponent,
    PostdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
