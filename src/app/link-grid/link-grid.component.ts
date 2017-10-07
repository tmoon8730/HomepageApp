import { Component, OnInit } from '@angular/core';

// Use the DataService
import { DataService } from '../data.service';

@Component({
  selector: 'app-link-grid',
  templateUrl: './link-grid.component.html',
  styleUrls: ['./link-grid.component.css']
})
export class LinkGridComponent {

  // Grid configuration
  gridConfig = {numOfCols: 4, rowHeight: '100px'};
  // Definition for each tile
  links: Array<any>;

  constructor(private _dataService: DataService) {
    // Access the Data Service getLinks() method to get the links from the database
    this._dataService.getLinks().subscribe(res => this.links = res);
  }

}
