import { Component } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CountdownTimerComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  myTargetDate = '2023-12-31T23:59:59';
  basePath:string = '../../../../../assets/img/';

}
