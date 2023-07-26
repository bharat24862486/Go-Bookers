import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api.service';

interface Seat {
  seatNumber: string;
  booked: boolean;
}

interface TicketType {
  name: string;
  count: number;
  seats: Seat[];
}

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css'],
})
export class SeatBookingComponent implements OnInit {
  // Seat arrays for each section
  premiumLeftSeats: Seat[] = [];
  premiumRightSeats: Seat[] = [];
  platinumLeftSeats: Seat[] = [];
  platinumRightSeats: Seat[] = [];
  silverLeftSeats: Seat[] = [];
  silverRightSeats: Seat[] = [];
  timing = ''
  showTicketSummary: boolean = false;
  ticketTypes: TicketType[] = [];
  getGold = 30
  getPlatinum = 5
  getSilver = 0

  cuurentDiscount = 0
  finalPrice = 0

  total: number = 0
  userInfo: any = {}

  constructor(private getParam: ActivatedRoute, private fetcher: ApiService, private auth: AuthService, private router:Router) {
    // Initialize seats for each section
    this.initializeSeats();
  }
  ngOnInit(): void {
    this.getParam.paramMap.subscribe((param) => {
      this.timing = param.get("name") || ''
    })

    if (this.auth.isAuthenticated$) {

      this.auth.user$.subscribe((user) => {
        let obj = {
          Email: user?.email
        }
        this.fetcher.getIsUserRegistered(obj).subscribe((res) => {
          if (typeof res != "string") {
            console.log(res)
            this.userInfo = res
            if (res.AccountType == "gold") {
              this.cuurentDiscount = 30
            } else if (res.AccountType == "platinum") {
              this.cuurentDiscount = 5
            } else {
              this.cuurentDiscount = 0
            }
            console.log(this.userInfo, "line 32")
          }
        })

      });



    }


  }


  initializeSeats() {
    // Premium section
    for (let i = 1; i <= 6; i++) {
      this.premiumLeftSeats.push({ seatNumber: `P-L${i}`, booked: false });
      this.premiumRightSeats.push({ seatNumber: `P-R${i}`, booked: false });
    }

    // Platinum section
    for (let i = 1; i <= 30; i++) {
      this.platinumLeftSeats.push({ seatNumber: `PL-L${i}`, booked: false });
      this.platinumRightSeats.push({ seatNumber: `PL-R${i}`, booked: false });
    }

    // Silver section
    for (let i = 1; i <= 30; i++) {
      this.silverLeftSeats.push({ seatNumber: `S-L${i}`, booked: false });
      this.silverRightSeats.push({ seatNumber: `S-R${i}`, booked: false });
    }
  }

  toggleBooking(seat: Seat) {
    seat.booked = !seat.booked;
    if (seat.booked) {
      // alert(`Seat ${seat.seatNumber} has been booked.`);
    } else {
      // alert(`Seat ${seat.seatNumber} has been unbooked.`);
    }
  }

  checkout() {
    this.ticketTypes = [
      {
        name: 'Premium',
        count: this.getTotalBookedSeats(this.premiumLeftSeats) + this.getTotalBookedSeats(this.premiumRightSeats),
        seats: this.getBookedSeats(this.premiumLeftSeats).concat(this.getBookedSeats(this.premiumRightSeats))
      },
      {
        name: 'Platinum',
        count: this.getTotalBookedSeats(this.platinumLeftSeats) + this.getTotalBookedSeats(this.platinumRightSeats),
        seats: this.getBookedSeats(this.platinumLeftSeats).concat(this.getBookedSeats(this.platinumRightSeats))
      },
      {
        name: 'Silver',
        count: this.getTotalBookedSeats(this.silverLeftSeats) + this.getTotalBookedSeats(this.silverRightSeats),
        seats: this.getBookedSeats(this.silverLeftSeats).concat(this.getBookedSeats(this.silverRightSeats))
      }
    ];

    if (this.total > 0) {
      this.total = 0
    }

    for (let i = 0; i < this.ticketTypes.length; i++) {
      if (this.ticketTypes[i].name == "Silver") {
        this.total += this.ticketTypes[i].count * 190

      } else if (this.ticketTypes[i].name == "Platinum") {
        this.total += this.ticketTypes[i].count * 300


      } else {
        this.total += this.ticketTypes[i].count * 500

      }
    }

    let val = (this.total * this.cuurentDiscount) / 100
    console.log(val, this.total, this.cuurentDiscount)
    this.finalPrice = this.total - val


    this.showTicketSummary = true;
  }

  // Helper function to get the total booked seats count for a given section
  getTotalBookedSeats(seats: Seat[]): number {
    return seats.filter(seat => seat.booked).length;
  }

  getBookedSeats(seats: Seat[]): Seat[] {
    return seats.filter(seat => seat.booked);
  }

  // Close ticket summary modal
  closeTicketSummary() {
    this.router.navigate(["/final_payment"])
  }


}
