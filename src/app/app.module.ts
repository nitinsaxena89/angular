import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { TelevisionshowsComponent } from './televisionshows/televisionshows.component';
import { TelevisionratingComponent } from './televisionrating/televisionrating.component';
import { EventsComponent } from './events/events.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MoviepageComponent } from './moviepage/moviepage.component';
import { TelevisionpageComponent } from './televisionpage/televisionpage.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import {RouterModule} from '@angular/router';
import { OopspageComponent } from './oopspage/oopspage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {FormsModule} from '@angular/forms';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { AuthguardGuard } from './authguard.guard';
import { CurrencyconverterPipe } from './currencyconverter.pipe';
const routes=[
  {path:'',component:HomepageComponent},
  {path:'Movies',component:MoviepageComponent,canActivate:[AuthguardGuard]},
  {path:'Television',component:TelevisionpageComponent,canActivate:[AuthguardGuard]},
  {path:'Events',component:EventpageComponent,canActivate:[AuthguardGuard]},
  {path:'Login', component:LoginpageComponent},
  {path:'Signup',component:SignuppageComponent},
  {path:'**',component:OopspageComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainlayoutComponent,
    MovielistComponent,
    MoviedetailComponent,
    TelevisionshowsComponent,
    TelevisionratingComponent,
    EventsComponent,
    BookingsComponent,
    MoviepageComponent,
    TelevisionpageComponent,
    EventpageComponent,
    OopspageComponent,
    HomepageComponent,
    LoginpageComponent,
    SignuppageComponent,
    CurrencyconverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
