import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pitch-predictor',
  templateUrl: './pitch-predictor.component.html',
  styleUrls: ['./pitch-predictor.component.css']
})
export class PitchPredictorComponent {
  prediction: any;

  constructor(private http: HttpClient) {}

  submitPrediction() {
    const data = {
      location: '1',
      pitch_type: 'Fastball'
    };

    this.http.post('https://aidan-portfolio.onrender.com', data).subscribe(
      response => {
        this.prediction = response;
      },
      error => {
        console.error('Error calling backend:', error);
      }
    );
  }
}
