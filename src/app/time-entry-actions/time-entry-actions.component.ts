import { Component, OnInit, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogTitle, MdDialogConfig} from '@angular/material';

@Component({
  selector: 'app-time-entry-actions',
  templateUrl: './time-entry-actions.component.html',
  styleUrls: ['./time-entry-actions.component.scss']
})
export class TimeEntryActionsComponent implements OnInit {

  @Output()
  submitClick = new EventEmitter<void>();

  @Output()
  resetClick = new EventEmitter<void>();

  @Output()
  confirmClick = new EventEmitter<void>();

  constructor(
    public dialog: MdDialog,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }

  private confirm() {
    let message = this.isValid();
    if (message) {
      this.showValidationDialog(message);
    }
    else {
      this.confirmClick.emit();
    }
  }

  private reset() {

  }

  private submit() {
    this.submitClick.emit();
  }

  private isValid(): string {
    return "someting is is not valid";
  }

  private showValidationDialog(message: string) {
    const dialogRef = this.dialog.open(ValidationDialog);
    dialogRef.componentInstance.message = message;
    return dialogRef.afterClosed();
  }
}

@Component({
  selector: 'app-time-entry-validation-dialog',
  template: `
    <div md-dialog-title>
      <md-toolbar color="accent">Please fix the following errors</md-toolbar>
    </div>
    <div md-dialog-content>{{message}}</div>
    <div md-dialog-actions>
      <button type="button" md-button class="primary"
        (click)="dialogRef.close(true)">OK</button>
    </div>`
})
export class ValidationDialog {

  message: string;

  constructor(public dialogRef: MdDialogRef<ValidationDialog>) {}
}
