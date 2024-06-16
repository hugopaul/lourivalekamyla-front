import { Component } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CountdownTimerComponent],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  myTargetDate = '2024-12-20T00:00:00';
  basePath: string = '../../../../../assets';
}
