import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'x-clone-trends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trends.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendsComponent {
  trends = [
    { title: 'Trend 1', subtitle: 'Subtitle 1', posts: 22 },
    { title: 'Trend 2', subtitle: 'Subtitle 2', posts: 20 },
    { title: 'Trend 3', subtitle: 'Subtitle 3', posts: 18 },
    { title: 'Trend 4', subtitle: 'Subtitle 4', posts: 12 },
    { title: 'Trend 5', subtitle: 'Subtitle 5', posts: 10 },
    { title: 'Trend 6', subtitle: 'Subtitle 6', posts: 7 },
    { title: 'Trend 7', subtitle: 'Subtitle 7', posts: 6 },
    { title: 'Trend 8', subtitle: 'Subtitle 8', posts: 6 },
    { title: 'Trend 9', subtitle: 'Subtitle 9', posts: 5 },
    { title: 'Trend 10', subtitle: 'Subtitle 10', posts: 4 },
  ];
}
