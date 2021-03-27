import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOverviewExampleDialog, HeaderComponent  } from './header/header.component';
import { ProfilesetupComponent } from './profilesetup/profilesetup.component';
import { AgmCoreModule } from '@agm/core';
import { NotificationComponent } from './Notification/notification.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent, DialogOverviewDialog } from './payment/payment.component';
import { Ng7MatBreadcrumbModule } from "ng7-mat-breadcrumb";
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { CartComponent } from './cart/cart.component';
import { CongrulationComponent } from './congrulation/congrulation.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { CartpageComponent, DialogOverviewsDialog } from './cartpage/cartpage.component';
import { TrackingpageComponent } from './trackingpage/trackingpage.component';
import { AgmDirectionModule } from 'agm-direction';
import { FoodcategoryComponent } from './foodcategory/foodcategory.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { KitchendetailComponent } from './kitchendetail/kitchendetail.component';
import { FAQComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CookComponent } from './cook/cook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProfilesetupComponent,
    NotificationComponent,
    OrdersComponent,
    DialogOverviewExampleDialog,
    ContactComponent,
    PaymentComponent,
    DialogOverviewDialog,
    OrderdetailComponent,
    CartComponent,
    CongrulationComponent,
    HomepageComponent,
    CartpageComponent,
    DialogOverviewsDialog,
    TrackingpageComponent,
    FoodcategoryComponent,
    ProductdetailComponent,
    KitchendetailComponent,
    FAQComponent,
    AboutusComponent,
    CookComponent,



  ],
  imports: [
    BrowserModule, NgOtpInputModule,
    Ng7MatBreadcrumbModule,
    MaterialModule,
    AppRoutingModule,
    GooglePlaceModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    AgmCoreModule.forRoot(),
    Ng7MatBreadcrumbModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAT2e_4pNXD4FS3jS1IZ_M_Y6mAOO-B2oU',
      libraries: ['places']
    }),

  ],
  entryComponents: [ DialogOverviewDialog,DialogOverviewExampleDialog, DialogOverviewsDialog],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
