import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  options: OptionsService;

  constructor(private optionsService:OptionsService) {
    this.options = optionsService;
  }

  ngOnInit(): void {

  }

}
