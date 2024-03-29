import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donation-item',
  standalone: true,
  imports: [],
  templateUrl: './donation-item.component.html',
  styleUrl: './donation-item.component.scss'
})
export class DonationItemComponent {

  @Input()
  item:any;

}
