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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { OrderComponent } from './components/order/order.component';
import { PostComponent } from './components/post/post.component';
import { AdminComponent } from './components/admin/admin.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { AccountComponent } from './components/account/account.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ProductnewComponent } from './components/productnew/productnew.component';
import { ProductupdateComponent } from './components/productupdate/productupdate.component';
import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductdeleteComponent } from './components/productdelete/productdelete.component';
import { PostnewComponent } from './components/postnew/postnew.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { PostupdateComponent } from './components/postupdate/postupdate.component';
import { PostdeleteComponent } from './components/postdelete/postdelete.component';
import { CustomerdetailComponent } from './components/customerdetail/customerdetail.component';
import { CustomerupdateComponent } from './components/customerupdate/customerupdate.component';
import { CustomerdeleteComponent } from './components/customerdelete/customerdelete.component';
import { ContactformdeleteComponent } from './components/contactformdelete/contactformdelete.component';
import { OrderupdateComponent } from './components/orderupdate/orderupdate.component';
import { OrderdeleteComponent } from './components/orderdelete/orderdelete.component';
import { WorkshopdetailComponent } from './components/workshopdetail/workshopdetail.component';
import { WorkshopupdateComponent } from './components/workshopupdate/workshopupdate.component';
import { WorkshopdeleteComponent } from './components/workshopdelete/workshopdelete.component';
import { Page404notfoundComponent } from './components/page404notfound/page404notfound.component';

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
    WorkshopdeleteComponent,
    Page404notfoundComponent
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
