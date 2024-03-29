import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './themes/ecommerce/ecommerce.component';
import { BodyComponent } from './themes/body/body.component';

export const routes: Routes = [
    { path: 'ecommerce', component: EcommerceComponent },
    { path: '', component: BodyComponent }
];
