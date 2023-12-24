import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ContactformComponent } from './contactform/contactform.component';
import { OrderComponent } from './order/order.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { AccountComponent } from './account/account.component';
import { CustomerComponent } from './customer/customer.component';
import { PolicyComponent } from './policy/policy.component';
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
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { CustomerdeleteComponent } from './customerdelete/customerdelete.component';
import { ContactformdeleteComponent } from './contactformdelete/contactformdelete.component';
import { OrderupdateComponent } from './orderupdate/orderupdate.component';
import { OrderdeleteComponent } from './orderdelete/orderdelete.component';
import { WorkshopdetailComponent } from './workshopdetail/workshopdetail.component';
import { WorkshopupdateComponent } from './workshopupdate/workshopupdate.component';
import { WorkshopdeleteComponent } from './workshopdelete/workshopdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    ContactformComponent,
    OrderComponent,
    PostComponent,
    AdminComponent,
    WorkshopComponent,
    AccountComponent,
    CustomerComponent,
    PolicyComponent,
    ProductnewComponent,
    ProductupdateComponent,
    OrderdetailsComponent,
    ProductdetailsComponent,
    ProductdeleteComponent,
    PostnewComponent,
    PostdetailComponent,
    PostupdateComponent,
    PostdeleteComponent,
    CustomerdetailComponent,
    CustomerupdateComponent,
    CustomerdeleteComponent,
    ContactformdeleteComponent,
    OrderupdateComponent,
    OrderdeleteComponent,
    WorkshopdetailComponent,
    WorkshopupdateComponent,
    WorkshopdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
