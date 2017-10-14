import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// The base model for the links
import { Link } from '../models/link';

// Use the DataService
import { DataService } from '../data.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent {
  // Current for the form
  model = new Link(1, 'Google', 1, 1, 'lightblue', 'https://www.google.com');

  // Keep track of if the form is submitted or not
  submitted = false;

  // Function that runs when the form is submitted
  onSubmit() {
    this._dataService.createLink(this.model);
    this.submitted = true;
    this.router.navigateByUrl('/');
  }

  // Function that runs when the New Link button is clicked
  newLink(event) {
    this.model = new Link(1, '', 1, 1, '', '');
  }

  constructor(private _dataService: DataService, private router: Router) {
    this.model = new Link(1, '', 1, 1, '', '');
  }
}
