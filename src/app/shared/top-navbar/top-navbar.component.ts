import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {
  @Input() pageTitle: string = '';
  @Output() toggleSidenav = new EventEmitter<void>();

  toggle() {
    this.toggleSidenav.emit();
  }
}