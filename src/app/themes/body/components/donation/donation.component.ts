import { Component } from '@angular/core';
import { DonationItemComponent } from '../donation-item/donation-item.component';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [DonationItemComponent],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {


  items = [{"description": "teste", "value": "400"},{"description": "teste", "value": "400"},{"description": "teste", "value": "400"},{"description": "teste", "value": "400"}]

}
