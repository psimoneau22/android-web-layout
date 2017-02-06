import { Assignment } from './models/assignment';
import { MdSidenav } from '@angular/material';
import {
  Component, OnInit,
  Input, ViewChild,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  assignments: Array<Assignment>;
  currentAssignment: Assignment;

  @ViewChild('sidenav')
  sidenav: MdSidenav;

  ngOnInit() {
    this.assignments = this.getAssignments();
    if (this.assignments.length) {
      this.currentAssignment = this.assignments[0];
    }
  }

  private getAssignments(){
    return [
      new Assignment('Engineer I', new Date('1-5-2017'), new Date('3-4-2017')),
      new Assignment('Developer III', new Date('1-5-2017'), new Date('3-4-2017'))
    ];
  }

  private selectAssignment(assignment: Assignment) {
    this.currentAssignment = assignment;
    this.sidenav.close();
  }

  private displaySettings(){
    console.log('settings clicked');
  }

  private unregister(){
    console.log('unregister clicked');
  }
}
