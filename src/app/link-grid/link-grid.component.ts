import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-grid',
  templateUrl: './link-grid.component.html',
  styleUrls: ['./link-grid.component.css']
})
export class LinkGridComponent {

  // Grid configuration
  gridConfig = {numOfCols: 4, rowHeight: '100px'};
  // Definition for each tile //TODO: Replace this data with a call to a MongoDB
  tiles = [
    {text: 'Google', cols: 1, rows: 1, color: 'lightyellow', link: 'https://www.google.com'},
    {text: 'Best Subreddit', cols: 1, rows: 1, color: 'lightgreen', link: 'https://reddit.com/r/me_irl'},
    {text: 'Ye ol Chan', cols: 1, rows: 1, color: 'lightpink', link: 'https://boards.4chan.org/g/'},
    {text: 'Communication', cols: 1, rows: 1, color: '#DDBDF1', link: 'https://hangout.google.com'},
  ];

}
