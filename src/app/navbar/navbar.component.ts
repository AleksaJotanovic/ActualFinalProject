import {
  Component,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() onOffcanvasCalled = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  nav_variable: boolean = false;
  @HostListener('document:scroll')
  scrollMethod() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.nav_variable = true;
    } else {
      this.nav_variable = false;
    }
  }

  callingOffcanvas() {
    this.onOffcanvasCalled.emit();
  }
}
