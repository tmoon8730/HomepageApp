import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomepageApp';


  // This is for opening and closing the add link form
  possibleLinks: any[] = ['/addform', '/'];
  rtLink = this.possibleLinks[0];
  switchLink() {
    this.rtLink = this.rtLink === this.possibleLinks[0] ?
      this.possibleLinks[1] :
      this.possibleLinks[0];
  }
}
