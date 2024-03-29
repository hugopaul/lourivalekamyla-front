import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { DonationComponent } from './components/donation/donation.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [BannerComponent,
    IntroductionComponent,
    DonationComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
