import { Component, OnInit } from '@angular/core';
import {PhotographyItems} from './photography-items';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  constructor() { }

  PHOTOITEMS = PhotographyItems;

  ngOnInit(): void {
  }

}
