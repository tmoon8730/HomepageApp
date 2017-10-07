import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Link } from '../models/link';

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
  onSubmit() { this.submitted = true; }

  // Function that runs when the New Link button is clicked
  newLink(event) {
    this.model = new Link(1, '', 0, 0, '', '');
  }
}
