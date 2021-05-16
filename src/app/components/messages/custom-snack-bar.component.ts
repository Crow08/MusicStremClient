import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-component-custom',
  template: `{{message}}`,
  styles: [`
    :host {
      text-align: center;
      display: block;
      font-size: 16px;
      font-weight: bold;
    }

    ::ng-deep .mat-snack-bar-container.mat-snack-bar-center.http-error-notification {
      background: rgb(255, 47, 47);
    }
  `],
})
export class CustomSnackBarComponent {
  message: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) {message},
    ) {
      // set message at the start. message is always there
      switch (message) {
        case "successMessage":
          this.message = this.successMessages[Math.floor(Math.random() * this.successMessages.length)];
          break;
        default:
          this.message = message;
          break;
      }
      
  }

  successMessages: string[] = [
    //positive
    "Yay, it worked!",
    "Wow, good job!",
    "It worked, be proud!",
    "You made the world a better place",
    "You made the right choice",
    "You rock!",
    "Great success!",
    //ironic
    "You did it, but at what cost?",
    "So you went with that one, huh?",
    "Are you sure about that?",
    "Well, if you say so...",
    "Success! Wait what?",
    "Guess that worked..."
  ]


/*USE THIS TO OPEN DAT SNACKBAR! (DON´T FORGET TO IMPORT)

  testSnack(){
    this.snackBar.openFromComponent(CustomSnackBarComponent,{
      data: {
        //put "successMessage" as message to get a random message
        message: "This could be your ad!"},
        duration:60000
    });
  }
*/
}
