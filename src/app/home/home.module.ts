import { CustomerService } from './../services/customer/customer.service';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomerlistComponent } from './components/customers/customerlist/customerlist.component';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list'
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


import {MatDividerModule} from '@angular/material/divider';

import { PanelMenuModule } from 'primeng/panelmenu';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AuthGuard } from '../authGuard/auth.guard';
import { AuthInterceptor } from '../authGuard/authInterceptor';
import { AddcityComponent } from './components/addcity/addcity.component';
import { SourceDestinationComponent } from './components/source-destination/source-destination.component';
import { BusDepoComponent } from './components/bus-depo/bus-depo.component';
import { BusDepoRouteComponent } from './components/bus-depo-route/bus-depo-route.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BusTypeComponent } from './components/bus-type/bus-type.component';
import { BusDetailComponent } from './components/bus-detail/bus-detail.component';
import { BusRouteBusDetailComponent } from './components/bus-route-bus-detail/bus-route-bus-detail.component';
import { BusRouteLocationComponent } from './components/bus-route-location/bus-route-location.component';
import { BusRouteLocationDetailComponent } from './components/bus-route-location-detail/bus-route-location-detail.component';
import {MatTableModule} from '@angular/material/table';
import { BusBookingComponent } from './components/bus-booking/bus-booking.component';
import { BusBookingDetailComponent } from './components/bus-booking-detail/bus-booking-detail.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerConfirmationComponent } from './components/passenger-confirmation/passenger-confirmation.component';
import { PayComponent } from './components/pay/pay.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PassengerBookingDetailComponent } from './components/passenger-booking-detail/passenger-booking-detail.component';
import { SleeperSeatsComponent } from './components/sleeper-seats/sleeper-seats.component';
import { SeaterSeatsComponent } from './components/seater-seats/seater-seats.component';
import { BusTicketsComponent } from './user/bus-tickets/bus-tickets.component';
import { UserComponent } from './user/user/user.component';
import { UserSideBarComponent } from './user/user-side-bar/user-side-bar.component';
import { UserNavBarComponent } from './user/user-nav-bar/user-nav-bar.component';
import { BusTypesComponent } from './user/bus-types/bus-types.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';
import { Sidebar1Component } from './components/sidebar1/sidebar1.component';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerlistComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    AddcityComponent,
    SourceDestinationComponent,
    BusDepoComponent,
    BusDepoRouteComponent,
    BusTypeComponent,
    BusDetailComponent,
    BusRouteBusDetailComponent,
    BusRouteLocationComponent,
    BusRouteLocationDetailComponent,
    BusBookingComponent,
    BusBookingDetailComponent,
    PassengerDetailComponent,
    PassengerConfirmationComponent,
    PayComponent,
    PaymentSuccessComponent,
    ErrorPageComponent,
    PassengerBookingDetailComponent,
    SleeperSeatsComponent,
    SeaterSeatsComponent,
    BusTicketsComponent,
    UserComponent,
    UserSideBarComponent,
    UserNavBarComponent,
    BusTypesComponent,
    Navbar1Component,
    Sidebar1Component

  ],
  imports: [
    
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    PanelMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    MatSelectModule,
    HttpClientModule,
    TableModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
    
  ],

  providers:[CustomerService,AuthGuard, [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],MatNativeDateModule,MatDatepickerModule]
})
export class HomeModule { }
