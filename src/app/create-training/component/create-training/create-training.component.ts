import { Component } from '@angular/core';
import { Training } from "../../interface";
import { CreateTrainingApiService } from "../../create-training-api.service";

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent {

  constructor(private createTrainingApiService: CreateTrainingApiService) {
  }

  sendTraining(training: Training): void {
    this.createTrainingApiService.sendTraining(training);
  }
}
