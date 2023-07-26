import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/Home/home/home.component';
import { SingleComponent } from './MyComponents/Pages/SingleMovie/single/single.component';
import { SingleMovieCinemaComponent } from './MyComponents/Pages/SingleMovieCinema/single-movie-cinema/single-movie-cinema.component';
import { UserProfileComponent } from './MyComponents/Pages/Profile/user-profile/user-profile.component';
import { PaymentPageComponent } from './MyComponents/Pages/Payment/payment-page/payment-page.component';
import { SeatBookingComponent } from './MyComponents/Pages/SeatsPage/seat-booking/seat-booking.component';
import { FinalPaymentComponent } from './MyComponents/Pages/FinalPayment/final-payment/final-payment.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'singleMovie/:id' , component: SingleComponent},
  {path:'singleMovieCinema/:name' , component: SingleMovieCinemaComponent},
  {path:'userprofile' , component: UserProfileComponent},
  {path:'planPayment/:name' , component: PaymentPageComponent},
  {path:'setSeats/:name' , component: SeatBookingComponent},
  {path:'final_payment' , component: FinalPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
