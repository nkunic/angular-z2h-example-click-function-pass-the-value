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

  // 5 Buttons highlight (Number)
  isClearDisabled = true;
  chosenNumber = 1;

  numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];

  calculate(divisibleBy: number) {
    this.chosenNumber = divisibleBy;
    if (divisibleBy === 1) {
      this.isClearDisabled = true;
    } else {
      this.isClearDisabled = false;
    }
  }
}
