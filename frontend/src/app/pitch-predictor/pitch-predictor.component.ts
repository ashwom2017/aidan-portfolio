import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pitch-predictor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pitch-predictor.component.html',
  styleUrls: ['./pitch-predictor.component.css'],
})
export class PitchPredictorComponent {
  gameStarted = false;
  numPitches = 3;
  pitchTypeInputs: string[] = [];
  pitchTypes: { [key: number]: string } = {};
  pitchHistory: Record<string, number> = {};
  pitchSequence: Array<[number, number]> = [];
  predicted: { location: number; type: number } | null = null;

  startGame(): void {
    this.pitchTypes = {};
    for (let i = 0; i < this.numPitches; i++) {
      const name = this.pitchTypeInputs[i]?.trim();
      if (!name) {
        alert(`Please enter a name for pitch ${i + 1}`);
        return;
      }
      this.pitchTypes[i + 1] = name;
    }
    this.gameStarted = true;
    this.makePrediction();
  }

  getZoneName(location: number): string {
    if (location === 0) return 'Ball';
    const row = location <= 3 ? 'Top' : location <= 6 ? 'Middle' : 'Bottom';
    const col = [1, 4, 7].includes(location)
      ? 'Left'
      : [2, 5, 8].includes(location)
      ? 'Center'
      : 'Right';
    return `${row} ${col}`;
  }

  makePrediction(): void {
    const all = [...this.pitchSequence];
    const weighted = new Map<string, number>();

    all.forEach(([loc, typ], i) => {
      const key = `${loc}-${typ}`;
      const weight = Math.pow(1.5, all.length - i);
      weighted.set(key, (weighted.get(key) || 0) + weight);
    });

    const options = Array.from(weighted.entries());
    if (options.length === 0) {
      this.predicted = {
        location: Math.floor(Math.random() * 10),
        type: Math.floor(Math.random() * this.numPitches) + 1,
      };
    } else {
      const total = options.reduce((sum, [_, w]) => sum + w, 0);
      const pick = Math.random() * total;
      let acc = 0;
      for (const [key, w] of options) {
        acc += w;
        if (acc >= pick) {
          const [loc, typ] = key.split('-').map(Number);
          this.predicted = { location: loc, type: typ };
          break;
        }
      }
    }
  }

  submitInput(loc: number, typ: number): void {
    if (loc < 0 || loc > 9 || !this.pitchTypes[typ]) return;
    this.pitchSequence.push([loc, typ]);
    if (this.pitchSequence.length > 5) this.pitchSequence.shift();
    this.makePrediction();
  }

  get pitchTypeIds(): number[] {
    return Object.keys(this.pitchTypes).map(Number);
  }
}
