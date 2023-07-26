import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponents/Authentications/login/login.component';
import { NavComponent } from './MyComponents/Navbar/nav/nav.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './MyComponents/Home/home/home.component';
import { Carosal1Component } from './MyComponents/Home/Carosal1/carosal1/carosal1.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './MyComponents/Footer/footer/footer.component';
import { SingleComponent } from './MyComponents/Pages/SingleMovie/single/single.component';
import { SingleMovieCinemaComponent } from './MyComponents/Pages/SingleMovieCinema/single-movie-cinema/single-movie-cinema.component';
import { UserProfileComponent } from './MyComponents/Pages/Profile/user-profile/user-profile.component';
import { PaymentPageComponent } from './MyComponents/Pages/Payment/payment-page/payment-page.component';
import { FormsModule } from '@angular/forms';
import { SeatBookingComponent } from './MyComponents/Pages/SeatsPage/seat-booking/seat-booking.component';
import { FinalPaymentComponent } from './MyComponents/Pages/FinalPayment/final-payment/final-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    Carosal1Component,
    FooterComponent,
    SingleComponent,
    SingleMovieCinemaComponent,
    UserProfileComponent,
    PaymentPageComponent,
    SeatBookingComponent,
    FinalPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-4a44w4ourz1gn8ak.us.auth0.com',
      clientId: '7wxbTQyqH4PZH9GEL04Wh3KlynSQrKk5',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    CarouselModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
