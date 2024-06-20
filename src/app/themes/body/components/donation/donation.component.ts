import { Component } from '@angular/core';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {


  items = [{"description": "teste", "value": "400"},{"description": "teste", "value": "400"},{"description": "teste", "value": "400"},{"description": "teste", "value": "400"}]

}
