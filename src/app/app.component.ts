import {
  Component, OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('someA', [
      state('default', style({
        width: '100px',
        height: '100px',
        fontSize: '20px',
        border: '2px solid red'
      })),
      state('active', style({
        width: '200px',
        height: '200px',
        fontSize: '12px',
        border: '2px solid blue'
      })),
      transition('default => active', animate('400ms ease-in')),
      transition('active => default', animate('400ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  state = "default"
  animate(){
    this.state = this.state === 'default' ? 'active' : 'default'
  }

  swipe(idx, event){
    console.log(idx, event);
  }

  ngOnInit(){
    
  }

  alert(val){
    console.log(val);
  }
}
