import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = new Date().getFullYear();

  contactHref: string = '';

  ngOnInit(): void {
    this.setContactLink();
  }

  // Detect if the device is mobile
  isMobileDevice(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /android/i.test(userAgent);
    return isIOS || isAndroid;
  }

  // Set the appropriate contact link
  setContactLink(): void {
    if (this.isMobileDevice()) {
      this.contactHref = 'mailto:aidanshwomwork@gmail.com';
    } else {
      this.contactHref = 'https://mail.google.com/mail/?view=cm&fs=1&to=aidanshwomwork@gmail.com';
    }
  }
}
