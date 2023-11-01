import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(SidebarMenuComponent) sidebarMenu!: SidebarMenuComponent;

  constructor() {}

  ngOnInit(): void {}

  openSidebarMenu() {
    this.sidebarMenu.offcanvasMenu.nativeElement.setAttribute(
      'style',
      'width: 100%'
    );
  }
}
