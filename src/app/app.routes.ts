import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './themes/ecommerce/ecommerce.component';
import { BodyComponent } from './themes/body/body.component';

export const routes: Routes = [
    { path: 'lourivalekamyla/ecommerce', component: EcommerceComponent },
    { path: 'lourivalekamyla', component: BodyComponent }
];
