import { Component, OnInit } from '@angular/core';
import { SolutionServiceService } from '../solution-service.service';

@Component({
  selector: 'app-solution-display',
  templateUrl: './solution-display.component.html',
  styleUrls: ['./solution-display.component.css']
})
export class SolutionDisplayComponent implements OnInit {

  solutionService: SolutionServiceService;

  constructor(private solutionS:SolutionServiceService) {
    this.solutionService = solutionS;
  }

  ngOnInit(): void {
  }

}
