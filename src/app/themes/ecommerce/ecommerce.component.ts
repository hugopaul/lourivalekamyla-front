import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [HeaderComponent,
  FooterComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {

}
