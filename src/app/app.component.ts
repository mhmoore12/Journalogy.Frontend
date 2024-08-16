import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Journalogy.Frontend';

  @ViewChild(SidenavComponent) sidenav!: SidenavComponent;

  toggleSidenav() {
    this.sidenav.toggleSidenav();
  }
}