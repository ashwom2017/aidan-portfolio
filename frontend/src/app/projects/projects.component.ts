import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PitchPredictorComponent } from '../pitch-predictor/pitch-predictor.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, PitchPredictorComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {}
