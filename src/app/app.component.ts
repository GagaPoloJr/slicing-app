import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarItem } from './interface';
import { CommonService } from './common.service';
import { GridTemplateComponent } from './grid-template/grid-template.component';
import { ActivityComponent } from './activity/activity.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    GridTemplateComponent,
    ActivityComponent,
    TopbarComponent,
    MatIconModule,
  ],
  template: `
    <main>
      <app-topbar></app-topbar>
      <app-header></app-header>
      <div class="page">
        <app-grid-template apiEndpoint="videos">
          <ng-template #itemTemplate let-item>
            <h2>{{ itemTemplate! }}</h2>
            <div class="info">
              <p>{{ item?.created_by }}</p>
              <p>{{ item?.hits }} views</p>
            </div>
            {{ item | json }}
          </ng-template>
        </app-grid-template>

        <!-- <app-grid-template apiEndpoint="people" class="people"></app-grid-template>
        <app-grid-template apiEndpoint="document" class="document"></app-grid-template> -->
        <app-activity class="activity"></app-activity>
        <app-activity class="channel"></app-activity>
      </div>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'slicing-app';
}
