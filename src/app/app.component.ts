import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './themes/header/header.component';
import { BodyComponent } from './themes/body/body.component';
import { FooterComponent } from './themes/footer/footer.component';
import { EcommerceComponent } from './themes/ecommerce/ecommerce.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            HeaderComponent,
            BodyComponent,
            EcommerceComponent,
            FooterComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lourivalekamyla';
}
