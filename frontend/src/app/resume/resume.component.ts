import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  openResume() {
    window.open('assets/AidanShwomNYResume_September2024.pdf', '_blank');
  }
}
