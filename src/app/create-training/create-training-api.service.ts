import { Injectable } from '@angular/core';
import { Training } from "./interface";

@Injectable({
  providedIn: 'root'
})
export class CreateTrainingApiService {

  constructor() {
  }

  sendTraining(training: Training): void {
    const oldTrainingsString = window.localStorage.getItem('training');
    const oldTrainings = oldTrainingsString ? JSON.parse(oldTrainingsString) : [];
    window.localStorage.setItem('training', JSON.stringify([
      ...oldTrainings,
      training
    ]));
  }
}
