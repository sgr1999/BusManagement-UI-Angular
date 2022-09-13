import { UserNavBarComponent } from './user/user-nav-bar/user-nav-bar.component';
import { UserSideBarComponent } from './user/user-side-bar/user-side-bar.component';
import { UserComponent } from './user/user/user.component';
import { SeaterSeatsComponent } from './components/seater-seats/seater-seats.component';
import { SleeperSeatsComponent } from './components/sleeper-seats/sleeper-seats.component';
import { PassengerBookingDetailComponent } from './components/passenger-booking-detail/passenger-booking-detail.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PayComponent } from './components/pay/pay.component';
import { PassengerConfirmationComponent } from './components/passenger-confirmation/passenger-confirmation.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { BusBookingDetailComponent } from './components/bus-booking-detail/bus-booking-detail.component';
import { BusBookingComponent } from './components/bus-booking/bus-booking.component';
import { BusRouteLocationDetailComponent } from './components/bus-route-location-detail/bus-route-location-detail.component';
import { BusRouteLocationComponent } from './components/bus-route-location/bus-route-location.component';
import { BusDetailComponent } from './components/bus-detail/bus-detail.component';
import { BusDepoComponent } from './components/bus-depo/bus-depo.component';
import { SourceDestinationComponent } from './components/source-destination/source-destination.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CustomerlistComponent } from './components/customers/customerlist/customerlist.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../authGuard/auth.guard';
import { AddcityComponent } from './components/addcity/addcity.component';
import { BusDepoRouteComponent } from './components/bus-depo-route/bus-depo-route.component';
import { BusTypeComponent } from './components/bus-type/bus-type.component';
import { BusRouteBusDetailComponent } from './components/bus-route-bus-detail/bus-route-bus-detail.component';
import { BusTypesComponent } from './user/bus-types/bus-types.component';
import { BusTicketsComponent } from './user/bus-tickets/bus-tickets.component';

const routes:Routes=[
  
  {
    path:'home',component:HomeComponent,canActivate:[AuthGuard],
    children:[
      { path:'addCustomer', component:CustomerComponent,canActivate:[AuthGuard]},
      { path:'customerList', component:CustomerlistComponent,canActivate:[AuthGuard]},
      { path:'sidebar', component:SidebarComponent,canActivate:[AuthGuard]},
      { path: 'addCity',component:AddcityComponent},
      { path: 'sourceDestination', component:SourceDestinationComponent},
      { path:'busDepo', component:BusDepoComponent},
      { path:'busDepoRoute', component:BusDepoRouteComponent},
      { path:'busType', component:BusTypeComponent},
      { path:'busDetail', component:BusDetailComponent},
      { path:'busRouteBusDetail', component:BusRouteBusDetailComponent},
      { path:'busRouteLocation', component:BusRouteLocationComponent},
      { path:'busRouteLocationDetail', component:BusRouteLocationDetailComponent},
      { path:'busBooking', component:BusBookingComponent},
      { path:'busBookingDetail', component:BusBookingDetailComponent},
      { path:'passengerDetail', component:PassengerDetailComponent},
      { path:'passengerConfirmation', component:PassengerConfirmationComponent},
      { path:'pay', component:PayComponent},
      { path:'paymentSuccess', component:PaymentSuccessComponent},
      { path:'errorPage', component:ErrorPageComponent},
      { path:'passengerBookingDetail', component:PassengerBookingDetailComponent},
      { path:'sleeper', component:SleeperSeatsComponent},
      { path:'seater', component:SeaterSeatsComponent},
    ]
  },

  {path:'bus-tickets',component:BusTicketsComponent},
  {
    path:'user',component:UserComponent,
    children:[
      {path:'navbar', component:UserNavBarComponent},
      {path:'sidebar', component:UserSideBarComponent},
      {path:'busTypes', component:BusTypesComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
})
export class HomeRoutingModule { }
