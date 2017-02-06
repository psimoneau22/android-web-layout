import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogTitle, MdDialogConfig} from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
 
@Component({
  selector: 'app-time-entry-form',
  templateUrl: './time-entry-form.component.html',
  styleUrls: ['./time-entry-form.component.scss']
})
export class TimeEntryFormComponent implements OnInit {

  project = { name: '', id: ''};
  task = { name: '', id: ''};
  payCode = { name: '', id: ''};
  time = { hours: 0, minutes: 0};

  constructor(
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  private showSearchDialog(title: string, url: string) {

    const dialogRef = this.dialog.open(SearchDialog);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.url = url;
    dialogRef.afterClosed().subscribe(s => {
      console.log(s);
    });
  }
}


@Component({
  selector: 'app-time-entry-validation-dialog',
  template: `
    <div md-dialog-title>
      <md-toolbar color="accent">   
        <span>{{title}}</span>
        <md-toolbar-row>
          <md-icon class="example-icon">search</md-icon>
          <input #searchBox md-input (keyup)="search(searchBox.value)" class="search">
        </md-toolbar-row>
      </md-toolbar>
    </div>
    <div md-dialog-content>
      <md-list>
        <md-list-item *ngFor="let item of items | async" (click)="selectItem(item)">
          <h4 md-line>{{item}}</h4>
        </md-list-item>
      </md-list>
    </div>
    <div md-dialog-actions>
      <button type="button" md-button
        (click)="dialogRef.close(null)">Cancel</button>
      <button type="button" md-button class="primary"
        (click)="dialogRef.close(selectedItem)">OK</button>
    </div>`,
    styles: [
      `div[md-dialog-content] {
        width: 60vw;
        height: 40vh;
      }
      md-list-item {
        cursor: pointer;
        color: black;
        height: 2em;
      }
      md-toolbar-row {
        height: 35px;
      }
      .search {
        border-bottom: 1px solid;
      }`
    ]
})
export class SearchDialog implements OnInit {

  title = "Search";
  url = "default";
  selectedItem: SearchItem;
  items: Observable<string[]>;
  private searchTerms = new Subject<string>();

  constructor(
    public dialogRef: MdDialogRef<SearchDialog>
  ) {}

  ngOnInit(){
    this.items = this.searchTerms
                 .debounceTime(300)
                 .distinctUntilChanged()
                 .switchMap(term => this.mockService(term, this.url));
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  mockService(term: string, url: string) {
    console.log('mock service for term ' + term + ' to ' + url);
    return Observable.of([
      // new SearchItem('project 1' + term, 'id1'),
      // new SearchItem('project 2' + term, 'id1')
      "test" + term,"testafa" + term
    ]);

  }

  selectItem(item: SearchItem) {
    this.selectedItem = item;
  }
}
export class SearchItem {
  constructor(
    public name: string,
    public id: string
  ) { }
}

