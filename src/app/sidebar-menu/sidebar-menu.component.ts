import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
})
export class SidebarMenuComponent implements OnInit {
  @ViewChild('offcanvasMenu') offcanvasMenu!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {}

  closeMenu() {
    this.offcanvasMenu.nativeElement.setAttribute('style', 'width: 0');
  }
}
