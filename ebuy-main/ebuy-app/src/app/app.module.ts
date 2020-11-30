import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ImplementGetComponent } from './components/item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { PopHeaderComponent } from './components/pop-header/pop-header.component';
import { MaterialModule } from './material.module';
import { FormComponent } from  './components/cf/cf.component';
import { CfNavComponent } from  './components/cf-nav/cf-nav.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import {MessagingService} from '../app/messaging.service';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';
import { AddingProductComponent } from './components/persoal-area/persoal-area.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgImageSliderModule } from 'ng-image-slider';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AlertListComponent } from './components/alert-list/alert-list.component';
import { NavBrWatchComponent } from './nav-br-watch/nav-br-watch.component';
import { SliderComponent } from './components/slider/slider.component';
import Swiper from 'swiper';

@NgModule({
  declarations: [
    AppComponent,
    ImplementGetComponent,
    NavBarComponent,
    ProfileComponent,
    FooterComponent,
    PopHeaderComponent,
    FormComponent,
    CfNavComponent,
    SelectedProductComponent,
    AddingProductComponent,
    SearchBoxComponent,
    AlertListComponent,
    NavBrWatchComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    ClickOutsideModule,
    NgImageSliderModule,

    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }



 
