// header.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NavbarItem } from '../interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.component.html",
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItemList: NavbarItem[] = [];

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.loadNavbarItems();
  }

  private loadNavbarItems() {
    this.commonService.getNavbarItems().then((navItemList: NavbarItem[]) => {
      this.navItemList = navItemList;
    });
  }
}
