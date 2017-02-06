import { Component, OnInit } from '@angular/core';

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
    
  ) { }

  ngOnInit() {
  }

}
