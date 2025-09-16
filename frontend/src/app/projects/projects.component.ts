import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- add RouterModule here for routerLink
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']  // plural, array
})
export class ProjectsComponent {}
