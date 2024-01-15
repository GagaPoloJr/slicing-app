import { Component } from '@angular/core';
import { Activity } from '../interface';
import { ActivityService } from '../activity.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  
  activityList: Activity[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.loadActivity();
  }

  getCategoryDescription(category: string): string {
    switch (category.toLowerCase()) {
      case 'like':
        return 'liked a video';
      case 'add':
        return 'added a new video';
      case 'unlock':
        return 'unlocked a new badge';
      case 'comment':
        return 'commented';
      case 'upload':
        return 'uploaded a new file';
      case 'share':
        return 'shared a document';
      default:
        return 'an unknown category';
    }
  }

  private loadActivity() {
    this.activityService.getActivityItems().then((item: Activity[]) => {
      this.activityList = item;
    });
  }
}
