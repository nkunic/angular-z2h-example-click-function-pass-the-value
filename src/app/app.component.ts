import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // 2 Buttons approve/reject (Boolean)
  isApproved = true;

  approve(status) {
    this.isApproved = status;
  }

  // 3 Buttons highlight (String)
  highligtColor = 'white';

  highligt(color: string) {
    this.highligtColor = color;
  }
}
