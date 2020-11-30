
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './components/cf/cf.component';
import { AppComponent } from './app.component';
import { AddingProductComponent } from './components/persoal-area/persoal-area.component';
import { ImplementGetComponent } from './components/item-list/item-list.component';
import { AlertListComponent } from './components/alert-list/alert-list.component';
const routes: Routes = [

  {
    path: "home",//"addingProd",
    component: ImplementGetComponent,
  },

  {
    path: "AlertList",
    component: AlertListComponent,
    // outlet:'watchOutlet'


  },
  
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "alertForm",
    component: FormComponent,
    // outlet: 'popup'
  },

  {
    path: "AddToCart",
    component: AddingProductComponent
  },
  
 
// {
//     path: '',
//     component: ImplementGetComponent,
//     pathMatch: 'full'
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




