import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

export interface DialogData {
  title: string;
  message: string;
  yesButton: string;
  noButton: string;
}

@Component({
  selector: 'yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss'],
})
export class YesNoDialogComponent implements OnInit {
  dialogData: DialogData;
  title: string;
  message: string;
  yesButton: string = 'Yes';
  noButton: string = 'No';

  constructor(
    public dialogRef: MatDialogRef<YesNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data.yesButton) {
      this.yesButton = data.yesButton;
    }
    if (data.noButton) {
      this.noButton = data.noButton;
    }
  }

  ngOnInit() {}

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
