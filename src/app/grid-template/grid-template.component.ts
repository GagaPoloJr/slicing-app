import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { VideoService } from '../video.service';
import { CommonModule } from '@angular/common';
import { PeopleService } from '../people.service';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-grid-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./grid-template.component.html`,
  styleUrl: './grid-template.component.scss',
})
export class GridTemplateComponent {
  @Input() apiEndpoint: string | undefined; // Input property to accept API endpoint
  @ContentChild('itemTemplate') itemTemplate!: TemplateRef<any>; // Use non-null assertion operator

  items: any[] = [];

  constructor(
    private videoService: VideoService,
    private peopleService: PeopleService,
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    switch (this.apiEndpoint) {
      case 'videos':
        this.items = await this.videoService.getVideoItems();
        break;
      case 'people':
        this.items = await this.peopleService.getPeopleItems();
        break;
      case 'documents':
        this.items = await this.documentService.getDocumentItems();
        break;
      // Add more cases for other API endpoints if needed
    }

    console.log('Items:', this.items);
  }
}
